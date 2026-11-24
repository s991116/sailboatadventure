<?php
/**
 * Contact form for the one.com site.
 * Posts are delivered through the local mail server to the site mailbox.
 * The recipient is fixed here and is never taken from the request.
 */

declare(strict_types=1);

ini_set('display_errors', '0');

register_shutdown_function(static function (): void {
    $error = error_get_last();
    if (!is_array($error)) {
        return;
    }
    $fatal = [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR, E_USER_ERROR];
    if (!in_array($error['type'], $fatal, true)) {
        return;
    }
    if (!headers_sent()) {
        http_response_code(500);
        header('Content-Type: application/json; charset=UTF-8');
    }
    echo json_encode([
        'success' => false,
        'message' => $error['message'],
        'line' => $error['line'],
    ], JSON_UNESCAPED_UNICODE);
});

const RECIPIENT = 'blueheaven@sailboatadventure.dk';
const MAX_NAME = 120;
const MAX_EMAIL = 200;
const MAX_SUBJECT = 180;
const MAX_STAGE = 300;
const MAX_MESSAGE = 5000;

function respond(int $status, bool $success, string $message = ''): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    $payload = ['success' => $success];
    if ($message !== '') {
        $payload['message'] = $message;
    }
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function textLength(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
}

function field(string $name, int $max): string
{
    $value = $_POST[$name] ?? '';
    if (!is_string($value)) {
        respond(400, false, 'Invalid form');
    }
    $value = trim(str_replace("\0", '', $value));
    if (textLength($value) > $max) {
        respond(400, false, 'Invalid form');
    }
    return $value;
}

function singleLine(string $value): string
{
    if (preg_match('/[\r\n]/', $value) === 1) {
        respond(400, false, 'Invalid form');
    }
    return $value;
}

function requestOrigin(): string
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if (is_string($origin) && $origin !== '') {
        return $origin;
    }

    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    if (!is_string($referer) || $referer === '') {
        return '';
    }

    $parts = parse_url($referer);
    if (!is_array($parts) || empty($parts['scheme']) || empty($parts['host'])) {
        return '';
    }

    $port = isset($parts['port']) ? ':' . $parts['port'] : '';
    return $parts['scheme'] . '://' . $parts['host'] . $port;
}

function originAllowed(string $origin): bool
{
    if ($origin === 'https://sailboatadventure.dk' || $origin === 'https://www.sailboatadventure.dk') {
        return true;
    }

    $parts = parse_url($origin);
    if (!is_array($parts) || ($parts['scheme'] ?? '') !== 'http') {
        return false;
    }

    $host = $parts['host'] ?? '';
    return $host === 'localhost' || $host === '127.0.0.1';
}

function rateLimited(string $ip): bool
{
    $dir = sys_get_temp_dir() . '/sba-contact';
    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) {
        return false;
    }

    $file = $dir . '/' . hash('sha256', $ip);
    $now = time();
    $hits = [];
    if (is_file($file)) {
        $raw = @file_get_contents($file);
        if (is_string($raw) && $raw !== '') {
            foreach (explode("\n", $raw) as $stamp) {
                $stamp = (int) $stamp;
                if ($stamp > 0 && $now - $stamp < 600) {
                    $hits[] = $stamp;
                }
            }
        }
    }

    if (count($hits) >= 20) {
        return true;
    }

    $hits[] = $now;
    @file_put_contents($file, implode("\n", $hits), LOCK_EX);
    return false;
}

function encodeSubject(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, false, 'Method not allowed');
}

if (!originAllowed(requestOrigin())) {
    respond(403, false, 'Rejected');
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '';
if (!is_string($ip) || $ip === '') {
    $ip = 'unknown';
}
if (rateLimited($ip)) {
    respond(429, false, 'Too many messages. Please try again later.');
}

if (field('leave_blank', 200) !== '') {
    respond(400, false, 'Rejected');
}

$name = singleLine(field('name', MAX_NAME));
$email = singleLine(field('email', MAX_EMAIL));
$subject = singleLine(field('subject', MAX_SUBJECT));
$stage = singleLine(field('stage', MAX_STAGE));
$message = str_replace(["\r\n", "\r"], "\n", field('message', MAX_MESSAGE));

if ($name === '' || $message === '' || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    respond(400, false, 'Invalid form');
}

if ($subject === '') {
    $subject = 'Besked fra sailboatadventure.dk';
}

$lines = [
    'Navn: ' . $name,
    'E-mail: ' . $email,
];
if ($stage !== '') {
    $lines[] = 'Togt: ' . $stage;
}
$lines[] = '';
$lines[] = $message;
$body = implode("\r\n", $lines);

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . RECIPIENT,
    'Reply-To: ' . $email,
]);

$sink = getenv('CONTACT_MAIL_SINK');
if (is_string($sink) && $sink !== '') {
    $record = 'To: ' . RECIPIENT . "\nSubject: " . $subject . "\n" . $headers . "\n\n" . $body . "\n----\n";
    $sent = file_put_contents($sink, $record, FILE_APPEND | LOCK_EX) !== false;
} else {
    try {
        $sent = mail(RECIPIENT, encodeSubject($subject), $body, $headers);
    } catch (Throwable $error) {
        respond(500, false, $error->getMessage());
    }
}

if (!$sent) {
    respond(500, false, 'Could not send your message.');
}

respond(200, true);
