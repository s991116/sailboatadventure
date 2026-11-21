import { tx } from './locale';

/**
 * All interface copy lives here as Danish and English together.
 * When you change a sentence, update both languages in the same `tx()` call.
 * Longer stories (passages, guest page, blog) use the same pair shape next to their content.
 */
export const ui = {
	nav: {
		home: tx('Vores Eventyr', 'Our Adventure'),
		plannedRoute: tx('Planlagt rute', 'Planned Route'),
		join: tx('Sejl med os', 'Join Our Journey'),
		history: tx('Historie', 'History'),
		tips: tx('Tips', 'Tips'),
		about: tx('Om os', 'About us'),
		openMenu: tx('Åbn menu', 'Open menu'),
		closeMenu: tx('Luk menu', 'Close menu'),
		main: tx('Hovedmenu', 'Main'),
		language: tx('Vælg sprog', 'Choose language'),
	},
	form: {
		name: tx('Navn', 'Name'),
		email: tx('E-mail', 'Email'),
		message: tx('Besked', 'Message'),
		submit: tx('Send besked', 'Send message'),
		success: tx('Tak for din besked — vi svarer snart.', 'Thanks for reaching out — we will reply soon.'),
		error: tx('Beskeden kunne ikke sendes. Prøv igen.', 'Could not send your message. Please try again.'),
		sending: tx('Sender…', 'Sending…'),
		notConfiguredBefore: tx(
			'Kontaktformularen er ikke sat op endnu. Tilføj ',
			'Contact form is not configured yet. Add ',
		),
		notConfiguredAfter: tx(' fra ', ' from '),
		stageLabel: tx('Foretrukket togt', 'Preferred passage'),
		stagePlaceholder: tx('Vælg et togt', 'Select a passage'),
	},
	home: {
		title: tx('Vores Sejler Eventyr', 'Our Sailing adventure'),
		welcome: tx(
			'Velkommen til vores sejleventyr. Her samler vi historier, billeder og små noter fra livet ombord.',
			'Welcome to our sailing adventure. Here we collect stories, photos, and small notes from life onboard.',
		),
		route: tx(
			'Vi planlægger at sejle fra Danmark til Caribien i 2027. Du kan læse mere om vores rute her:',
			'We are planning to sail from Denmark to the Caribbean in 2027. You can read more about our route here:',
		),
		guest: tx(
			'På de længere togter planlægger vi at sejle med gaster, for at dele oplevelsen og for at være sammen om at nå nye destinationer. Du kan læse mere om at sejle med her:',
			'On the longer passages we plan to sail with crew, to share the experience and to reach new destinations together. You can read more about joining us here:',
		),
		youtube: tx('Følg os på YouTube', 'Follow us on our Danish YouTube channel'),
		viewChannel: tx('Se kanalen', 'View channel'),
		videosError: tx('Videoerne kunne ikke hentes.', 'Failed to load YouTube videos.'),
		carousel: tx('karrusel', 'carousel'),
		preparingTitle: tx('Vi forbereder eventyret', 'Preparing for our adventure'),
		preparing: tx(
			'Vi bygger eventyret op gennem arbejdet på båden og gør Blue Heaven klar til togterne forude.',
			'We are building the adventure from the work on the boat, getting Blue Heaven ready for the passages ahead.',
		),
		preparingSafety: tx(
			'Vi har sat sikkerhedsudstyr op, blandt andet redningsflåde, AIS og radar, og gjort det rarere at bo ombord med solceller, cockpit-telt og opladere til elektronik.',
			'We have fitted safety equipment, including a life raft, AIS and radar, and made it more comfortable to live onboard with solar panels, a cockpit tent and chargers for electronics.',
		),
		preparingCourses: tx(
			'Vi har sammen taget en række kurser i alt fra tidevand til offshore sikkerhedskursus. Vi har desuden begge duelighedsbevis, og Philip har derudover Yachtskipper 3.',
			'Together we have taken a range of courses, from tides to an offshore safety course. We both hold a Danish certificate of competency (duelighedsbevis), and Philip also holds Yachtskipper 3.',
		),
		preparingTrips: tx(
			'Vi har også sejlet længere ture i Danmark, Sverige og Norge, for at prøve båden, udstyret og os selv af.',
			'We have also sailed longer trips in Denmark, Sweden and Norway, to try out the boat, the gear and ourselves.',
		),
		passagesLink: tx('Læs mere om vores togter her', 'Read more about our passages here'),
		heroAlt: tx(
			'Louise og Philip på en strand i Danmark ved solnedgang.',
			'Louise and Philip on a beach in Denmark at sunset.',
		),
		boatAlt: tx(
			'Philip og Louise i beskyttelsesdragter, mens de arbejder på deres sejlbåd.',
			'Philip and Louise in protective suits while working on their sailboat.',
		),
	},
	about: {
		title: tx('Om os', 'About us'),
		coupleTitle: tx('Hvem er vi', 'Who we are'),
		coupleAlt: tx(
			'Louise og Philip sammen i cockpittet på deres sejlbåd.',
			'Louise and Philip together in the cockpit of their sailboat.',
		),
		intro: [
			tx(
				'Vi er et dansk par, der er på vej ud på vores langtur. Vi købte vores første sejlbåd i 2020 og har sejlet rundt i Danmark, Sverige og Norge.',
				'We are a Danish couple setting out on our long voyage. We bought our first sailboat in 2020 and have sailed around Denmark, Sweden and Norway.',
			),
			tx(
				'Vi har to drenge, Oliver og Mikkel, der begge har afsluttet gymnasiet i 2026. Drengene er ikke interesseret i langturssejlads, men vil komme og besøge os undervejs.',
				'We have two boys, Oliver and Mikkel, who both finished gymnasium in 2026. The boys are not interested in long-distance sailing, but they will come and visit us along the way.',
			),
			tx(
				'Vi kan begge lide at sejle. Det er vigtigt for os, fordi sejlads er noget, vi gør og nyder sammen. Vi kan især godt lide at ligge for anker og nyde naturen.',
				'We both like sailing. That matters to us, because sailing is something we do and enjoy together. We especially like lying at anchor and taking in the nature around us.',
			),
			tx(
				'I 2023 begyndte vi at kigge på langtur, og solgte derfor vores første sejlbåd, for at købe noget der var mere egnet til langtur. Vi har siden gjort os selv og båden klar til langtur.',
				'In 2023 we started looking at a long voyage, and so we sold our first sailboat to buy one better suited to it. Since then we have been getting ourselves and the boat ready.',
			),
		],
		philipAlt: tx('Philip med stribet hue ombord.', 'Philip in a striped beanie, onboard.'),
		philip: [
			tx(
				'Jeg er draget af langturen for oplevelserne og udfordringerne. For mig er eventyr det ukendte: man kan forberede sig meget, men ikke på alt.',
				'I’m drawn to long-distance sailing for the experiences and the challenges. To me, adventure means the unknown: you can prepare a lot, but you can’t prepare for everything.',
			),
			tx(
				'En sjov detalje: jeg var bange for at sejle som barn. Jeg prøvede endda en optimistjolle en gang — min "karriere" varede omkring 30 minutter.',
				'Fun fact: I was scared of sailing as a kid. I even tried an Optimist dinghy once—my “career” lasted about 30 minutes.',
			),
			tx(
				'Efter jeg mødte Louise, er jeg blevet rigtig glad for at sejle. I 2023 krydsede jeg Atlanten som gast, for at prøve hvordan det ville være, inden vi investerede alt vores tid på langturssejlads.',
				'After I met Louise, I became really fond of sailing. In 2023 I crossed the Atlantic as crew, to find out what it would be like before we invested all our time in long-distance sailing.',
			),
			tx(
				'Jeg er uddannet softwareingeniør og elsker tekniske projekter, og både er fulde af gør-det-selv-problemer — mange af dem dejligt nørdede.',
				'I trained as a software engineer and I love technical projects, and boats are full of do-it-yourself problems — many of them delightfully nerdy.',
			),
			tx(
				'Som skipper på båden har jeg hovedansvaret for sikkerheden og for, at motor og udstyret virker.',
				'As skipper on the boat, I am responsible for safety, and for keeping the engine and the equipment working.',
			),
		],
		louiseAlt: tx(
			'Louise sidder på dækket med havet bag sig og et dansk flag i forgrunden.',
			'Louise sitting on the deck with the sea behind her and a Danish flag in the foreground.',
		),
		louise: [
			tx(
				'I modsætning til Philip har jeg altid følt mig hjemme på vandet. Min far har sejlet, siden han var dreng, og jeg voksede op med at tage med ham — mest som gæst og ikke som besætning, men altid glad for at være ude.',
				'Unlike Philip, I’ve always felt comfortable on the water. My dad has sailed since he was a boy, and I grew up joining him on trips—mostly as a guest rather than crew, but always happy to be out there.',
			),
			tx(
				'Et af mine fokusområder er at planlægge ruten, både den overordnede og den daglige, så vi sejler sikkert og behageligt.',
				'One of my focus areas are planning the route, both the overall and the day-to-day planning, to ensure we have a safe and comfortable sailing.',
			),
		],
		boatTitle: tx('Vores sejlbåd Blue Heaven', 'Our sailboat Blue Heaven'),
		boatAlt: tx('Blue Heaven sejler forbi en klippekyst.', 'Blue Heaven sailing past a rocky cliff coast.'),
		boat: [
			tx(
				'Vores sejlbåd, Blue Heaven, er en Bavaria 39 Cruiser, som vi har gjort klar til langtur. Båden er fra 2005 og har været passet godt på. Vi købte den i Sverige i 2024, lidt nord for Stockholm.',
				'Our sailboat, Blue Heaven, is a Bavaria 39 Cruiser, which we have prepared for a long voyage. She was built in 2005 and has been well looked after. We bought her in Sweden in 2024, a little north of Stockholm.',
			),
			tx(
				'Vi har valgt en klassisk turbåd, som har en størrelse der passer til os. Vi har plads til at have gaster med, og har et rimeligt stort cockpit for en båd på 39 fod.',
				'We chose a classic cruising boat, in a size that suits us. There is room to bring crew, and the cockpit is fairly large for a 39-foot boat.',
			),
		],
		contactTitle: tx('Kontakt os', 'Contact Us'),
		contactBody: tx(
			'Skriv til os i formularen nedenfor. Din besked bliver leveret privat til vores indbakke. Vi viser ikke en e-mailadresse eller et telefonnummer på siden.',
			'Write to us with the form below. Your message is delivered privately to our inbox. We do not publish an email address or phone number on this site.',
		),
		contactSubject: tx('Kontakt — Sailboat Adventure', 'Contact us — Sailboat Adventure'),
	},
	contact: {
		title: tx('Kontakt os', 'Contact us'),
		documentTitle: tx('Kontakt os — Sailboat Adventure', 'Contact us — Sailboat Adventure'),
		body: tx(
			'Skriv til os i formularen nedenfor. Din besked bliver leveret privat til vores indbakke — vi viser ikke en e-mailadresse eller et telefonnummer på siden.',
			'Write to us with the form below. Your message is delivered privately to our inbox — we do not publish an email address or phone number on this site.',
		),
		subject: tx('Kontakt — Sailboat Adventure', 'Contact us — Sailboat Adventure'),
	},
	history: {
		title: tx('Tilbage i logbogen', 'Back through the logbook'),
		lede: tx(
			'Scroll ned for at gå tilbage i tiden. Hvert øjeblik vokser, når det nærmer sig midten af skærmen, og toner ud igen, når det glider væk.',
			'Scroll down to move back in time. Each moment grows as it nears the middle of the screen, then fades away as it leaves.',
		),
		jump: tx('Hop i tidslinjen', 'Jump in the timeline'),
	},
	blog: {
		title: tx('Blog', 'Blog'),
		lede: tx('Seneste poster fra logbogen.', 'Latest posts from the logbook.'),
	},
	route: {
		title: tx('Planlagt rute', 'Planned Route'),
		heroAlt: tx(
			'Solnedgang set fra dækket, med stille vand og det danske flag.',
			'Sunset seen from the deck, with still water and the Danish flag.',
		),
		mapHint: tx(
			'Klik på en rute på kortet for at zoome ind og læse mere om togterne, fra Danmark til Caribien.',
			'Click a route on the map to zoom in and read more about the passages, from Denmark to the Caribbean.',
		),
		listHint: tx(
			'Vælg et togt nedenfor for at læse mere, fra Danmark til Caribien.',
			'Choose a passage below to read more, from Denmark to the Caribbean.',
		),
		fullRoute: tx('← Hele ruten', '← Full route'),
		mapFullRoute: tx('Hele ruten', 'Full route'),
		passagesLabel: tx('Planlagte togter', 'Planned passages'),
		openToJoin: tx('Ledige pladser', 'Open to join'),
		fullyBooked: tx('Fuldt booket', 'Fully booked'),
		joinCta: tx('Vil du sejle med på et eller flere togter i 2027?', 'Want to join us for one or more passages in 2027?'),
		joinLink: tx('Sejl med os', 'Join our journey'),
		guestCrew: tx('Gaste', 'Crew'),
		joinPassage: tx('Sejl med på dette togt', 'Join this passage'),
		hope: tx('Det vi håber at opleve', 'What we hope to experience'),
		alternative: tx('Alternativ rute', 'Alternative route'),
		passageWord: tx('Togt', 'Passage'),
		connector: tx('til', 'to'),
		mapNotice: tx(
			'Kortet kræver en MapTiler-nøgle. Sæt PUBLIC_MAPTILER_API_KEY i miljøet.',
			'Map preview requires a MapTiler API key. Set PUBLIC_MAPTILER_API_KEY in your environment.',
		),
	},
	join: {
		routes: tx('Læs mere om ruterne og togterne', 'Read more about the routes and passages'),
		here: tx('her', 'here'),
		subject: tx('Forespørgsel om at sejle med — Sailboat Adventure', 'Join Our Journey enquiry — Sailboat Adventure'),
	},
	tips: {
		title: tx('Tips', 'Tips'),
		lede: tx(
			'Praktiske noter fra klargøring af båden og turen.',
			'Practical notes from preparing the boat and the passage.',
		),
		courtesyTitle: tx('Print dine egne gæsteflag', 'Print your own courtesy flags'),
		courtesyBefore: tx(
			'Du kan printe dine egne gæsteflag, der passer til de lande, du vil sejle til. Det her er vores udgave af guiden fra',
			'You can print your own courtesy flags that match the countries you plan to sail to. This is our version of the guide from',
		),
		stepsIntro: tx('Det består af tre enkle trin:', 'It consists of three simple steps:'),
		steps: [
			tx('Lav din egen PDF med de flag, du skal bruge.', 'Create your own PDF file with the flags you need.'),
			tx('Send PDF-filen til et trykkeri, der kan trykke på stof.', 'Send the PDF to a print service that offers fabric printing.'),
			tx('Klip og sy langs kanten af flagene.', 'Cut and sew along the edges of the flags.'),
		],
		makeTitle: tx('Lav arket', 'Make the sheet'),
		makeBefore: tx('Åbn', 'Open'),
		makeAfter: tx(
			'og vælg stederne på din rute. Nationalflaget er gæsteflaget. Hvis en ø har sit eget regionale flag, kan du også tilføje og printe det regionale flag.',
			'and select the places on your route. The national flag is the courtesy flag. If an island has its own regional flag, you can also add and print that regional flag.',
		),
		printTitle: tx('Få det trykt', 'Have it printed'),
		printBefore: tx(
			'Send PDF-filen til et trykkeri, der trykker på udendørsstof. Et bud er',
			'Send the PDF to a print service that prints on outdoor fabric. One option is',
		),
		printMiddle: tx(
			'— for eksempel med disse indstillinger (samme fremgangsmåde som beskrevet af',
			'— for example with these settings (same approach as described by',
		),
		settings: [
			tx('Materiale: vindstærkt udendørsstof, cirka 115 g/m²', 'Material: windproof outdoor fabric, about 115 gsm'),
			tx('Tilskæring: lige kanter', 'Cutting method: square-cut edges'),
			tx('Forstærket syning: ingen', 'Reinforced stitching: none'),
			tx('Forstærket søm: ingen', 'Reinforced hem: none'),
			tx('Stanglomme: ingen', 'Pole pocket: none'),
			tx('Tilbehør: ingen', 'Accessories: none'),
		],
		sheetNote: tx(
			'PDF\'en har allerede det ekstra stof til folden og de streger, du følger, når du klipper og syr.',
			'The PDF already includes the extra fabric for the fold and the lines you follow when you cut and sew.',
		),
		readTitle: tx('Læs arket', 'Read the sheet'),
		read: [
			tx('Den yderste stiplede linje er der, hvor du klipper.', 'The outer dashed line is where you cut.'),
			tx(
				'Den inderste stiplede linje er folden. Der er 2 cm stof uden for det færdige flag på alle sider. Motivet er spejlet over folden, så farven fortsætter ind i sømmen.',
				'The inner dashed line is the fold. There is 2 cm of fabric outside the finished flag on every side. The picture is mirrored across that fold, so the colour continues into the hem.',
			),
			tx(
				'Landets navn er trykt i venstre fold. Den kant er halsen, den side du sætter i faldet, og navnet viser, hvad der er op.',
				'The country name is printed in the left fold. That edge is the hoist, the side you attach to the halyard, and the name shows which way is up.',
			),
		],
		sewTitle: tx('Sy flaget', 'Sew the flag'),
		sew: [
			tx('Klip langs den yderste stiplede linje.', 'Cut along the outer dashed line.'),
			tx(
				'Fold top og bund ind langs den inderste stiplede linje, og sy to gange langs hver kant.',
				'Fold the top and the bottom in along the inner dashed line, and stitch twice along each edge.',
			),
			tx(
				'Fold den frie ende ind langs den inderste stiplede linje — den frie ende er den, der vender væk fra faldet — og sy en tredobbelt kant.',
				'Fold the fly in along the inner dashed line — the fly is the free end, away from the halyard — and stitch a triple edge.',
			),
			tx(
				'På halsen lægger du et kort stykke bånd over cirka 50 cm 3 mm flettet polyesterline og syr båndet fast til flaget, så linen ligger inde i det. En lille løkke foroven gør det nemt at se, hvad der er op, når du skifter flag på dækket.',
				'On the hoist, fold a short piece of webbing over about 50 cm of 3 mm braided polyester line, and stitch the webbing to the flag so the line is held inside it. A small loop at the top makes it easy to see which way is up when you change flags on deck.',
			),
			tx(
				'Skriv landets navn på båndet med en vandfast pen, så du kan gribe det rigtige flag i en fart.',
				'Write the country name on the webbing with a permanent pen, so you can grab the right flag in a hurry.',
			),
		],
	},
};
