export interface Article {
  slug: string;
  title: string;
  summary: string;
  content: string;
  category?: string;
  date?: string;
}

export const articles: Article[] = [
  {
    slug: "norges-rolle-i-eus-energiomstilling",
    title: "Hva betyr Norges rolle i EUs energiomstilling?",
    summary:
      "En kort introduksjon til hvordan energipolitikk og økonomi møtes i nordisk kontekst.",
    date: "2026-06-08",
    content:
      "Norges rolle i EUs energiomstilling handler om mer enn strøm og gass. Det handler om nasjonal sikkerhet, industristruktur og hvilke investeringer som prioriteres.\n\nSamtidig er den norske modellen preget av et skarpt skille mellom politikk og marked, og det gir oss en unik posisjon som både leverandør og kritisk tilskuer til EUs energiplaner.\n\nI denne teksten utforsker jeg hvordan Norge kan bidra konstruktivt samtidig som vi ivaretar egne interesser i det grønne skiftet.",
  },
  {
    slug: "demokrati-og-markedsokonomi-hva-kan-vi-lare",
    title: "Demokrati og markedsøkonomi: hva kan vi lære?",
    summary:
      "Refleksjoner om politiske tendenser og økonomiske rammeverk i dagens samfunn.",
    date: "2026-05-12",
    content:
      "Markedsøkonomi og demokrati er ikke alltid i naturlig harmoni. Et fungerende marked krever regulering, mens et modent demokrati krever legitimitet og tillit.\n\nI denne teksten ser jeg på spenningene mellom økonomisk effektivitet og politisk styring, og hvordan små endringer i rammebetingelsene kan gi store konsekvenser for tilliten i samfunnet.\n\nÅ forstå dette er sentralt for å skrive om politikk uten å miste det analytiske blikket.",
  },
  {
    slug: "hvordan-skrive-tydelig-om-kompliserte-temaer",
    title: "Hvordan skrive tydelig om kompliserte temaer",
    summary:
      "En tekst om formidling, oppmerksomhet og hvordan jeg jobber med idéer.",
    date: "2026-04-20",
    content:
      "God formidling starter med å identifisere hva som er viktigst for leseren. Komplekse temaer blir enklere når man prioriterer helheten fremfor detaljene.\n\nDenne artikkelen deler noen enkle grep for å holde teksten stringent og relevant: en klar problemstilling, korte setninger, og en struktur som bygger logisk.\n\nMålet er ikke å gjøre alt enkelt, men å gjøre det forståelig uten å glatte over det som er viktig.",
  },
  {
    slug: "gdansk-omdefinerer-seg-selv",
    title: "Gdansk omdefinerer seg selv",
    category: "Industri",
    summary:
      "Polen satser tungt på havvind i Østersjøen. Verftskvarteret i Gdansk er stedet de valgte.",
    date: "2026-06-08",
    content:
      "Gdansk har en industrihistorie som få europeiske byer kan matche. Verftskvarteret på Ostrów-øya var i tiår synonymt med tung stålproduksjon, arbeidskonflikter og til slutt nedleggelse. Det var her Solidarność under Lech Wałęsa ble født i 1980, ikke som en abstrakt politisk bevegelse, men som et konkret svar på industriell krise og statlig mislighold. Da verftsportene ble stengt på 80- og 90-tallet, stod store deler av kvarteret tomt.\n\nDet står ikke tomt lenger.\n\nBaltic Towers er et joint venture mellom det spanske selskapet GRI Renewable Industries og det polske statlige industrifondet ARP. Fabrikken ligger på de samme områdene som de nedlagte verftene og er Polens første produksjonsanlegg for vindturbintårn, med en investering på rundt 200 millioner euro. Den produserer tårnseksjoner på opptil 50 meter i lengde, 11 meter i diameter og 500 tonn per seksjon. Kapasiteten er satt til 150 seksjoner i året.\n\nDimensjonene er ikke tilfeldige. Neste generasjons havvindturbiner krever tårn ingen lastebil kan frakte. Det krever direkte sjøtilgang og tungt løfterutstyr, og det er nøyaktig hva verftskvarteret tilbyr. Ikke en tilfeldig lokasjon. En lokasjon som fungerer fordi infrastrukturen allerede lå der, halvt forlatt.\n\nProsjektet henter mesteparten av materialene lokalt og har aktivert tidligere industriområder som ellers ville fortsatt å forfalle. Gammel grunn, ny bruk.\n\nPolen satser tungt på havvind i Østersjøen. Baltic Towers er ikke et pilotprosjekt. Det er en posisjonering. Gdansk er i ferd med å bli et forsyningsnav for en sektor som bare vokser.\n\nSolidarność kjempet mot industriell nedgang i de samme portene. Det er en merkelig sirkel å stå i.",
  },
];
