export type behandling = {
    title: string;
    slug: string;
    text: string;
    symptoms?: string[];
    image: string;
    bookingUrl: string;
    price: string;
    time: string;
};

export const behandlingar: behandling[] = [
    {
        title: "Behandlande terapeutisk massage",
        slug: "behandlande",
        text: `En genomkörare för ett område, t.ex. nacke och axlar, som släpper på spänningarna och gör muskler mjuka och följsamma igen.
          Om du har mycket ont rekommenderar jag istället att ta en 60 minuters behandlande terapeutisk massage.`,
        image: "/hel4.png",
        bookingUrl:
            "https://www.bokadirekt.se/places/hel-stark-massageterapi-alvik-hos-naprapatlandslaget-23365",
        price: "580 / 980",
        time: "30 / 60",
    },
    {
        title: "Helkroppsmassage",
        slug: "helkroppsmassage",
        text: `Klassisk svensk massage - Vid beröring, oavsett om du väljer en djupare eller lättare form av behandling, frisätts hormonet oxytocin.
          Detta hormon aktiverar kroppens lugn- och ro-system, vilket lugnar nervsystemet och resulterar i minskad stress,
          stärkt immunförsvar, bättre matsmältning och förbättrad sömn. Oxytocin lindrar också vid smärta.`,
        image: "/hel1.png",
        bookingUrl:
            "https://www.bokadirekt.se/places/hel-stark-massageterapi-alvik-hos-naprapatlandslaget-23365",
        price: "980",
        time: "60",
    },
    {
        title: "Gravidmassage",
        slug: "gravidmassage",
        text: `Skön och avkopplande, men även smärtlindrande och förebyggande massage för dig som väntar barn.
    Du ligger på en speciell gravidkudde, som justeras efter din mage. Utförs från vecka 13 till de sista veckorna i din graviditet.`,
        image: "/hel1.png",
        bookingUrl:
            "https://www.bokadirekt.se/places/hel-stark-massageterapi-alvik-hos-naprapatlandslaget-23365",
        price: "980",
        time: "60",
    },
    {
        title: "Lymfmassage",
        slug: "lymfmassage",
        text: `Lymfmassage är en enkel metod med goda resultat vid svullnader i armar och ben eller trötthetssymptom.
    Lymfmassage stimulerar lymfsystemet att föra ut överskottsvätska och slaggprodukter på ett effektivt sätt ur kroppen - sätter fart på kroppens avlopp helt enkelt. Lymfmassagen består av strykningar,
    djupandning och lätta tryck i lymfflödets riktning och ibland något djupare grepp för att lösa upp stopp och fibroser. Behandlingen blir därför en blandning av strykningar, muskelmassage, andning och tryck.
    Detta är en mycket lugnande behandling, eftersom lymfsystemet fungerar bäst när man är avslappnad. Lymfsystemet stimuleras att arbeta bättre utan att öka blodcirkulationen.
    Behandlingen passar ALLA, men speciellt personer med någon typ av mindre svullnad, smärta, domningar eller trötthetssymptom. Kunder brukar uppleva sig “lätta i kroppen” efter massagen.`,
        image: "/hel3.png",
        bookingUrl:
            "https://www.bokadirekt.se/places/hel-stark-massageterapi-alvik-hos-naprapatlandslaget-23365",
        price: "1280",
        time: "90",
    },
    {
        title: "Käkledsbehandling",
        slug: "kakledsbehandling",
        text: `Käkledsbehandling släpper på spänningarna kring käkleden, huvudet och nacken och har då även en avslappnande positiv effekt i resten av kroppen,
    då käkleden har en mycket stark koppling till nervsystemet.
    Följande symptom kan vara tecken på att du är i behov av käkledsmassage:`,
        symptoms: [
            "Huvudvärk",
            "Bettskena",
            "Gnisslar tänder nattetid",
            "Smärta, knäppningar, 'knaster' runt käken",
            "Spänd i käkpartiet",
        ],
        image: "/hel2.png",
        bookingUrl:
            "https://www.bokadirekt.se/places/hel-stark-massageterapi-alvik-hos-naprapatlandslaget-23365",
        price: "980",
        time: "60",
    },
];
