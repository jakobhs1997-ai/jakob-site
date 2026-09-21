export const metadata = {
  title: 'Om meg – Jakob Hake-Steffensen',
  description: 'Bakgrunn, utdanning og ferdigheter.',
};

import Image from "next/image";

const sections = [
  {
    id: "hva-jeg-er-opptatt-av",
    title: "Hva jeg er opptatt av",
    details:
      "Jeg følger særlig med på Europa – hva som holder det sammen, og hva som ikke gjør det lenger. Energi som pressmiddel. Partier som vokser ved å tape støtten de hadde. Det jeg egentlig er opptatt av er gapet mellom hva som sies om politikk og hva den faktisk gjør. Den analysen er sjelden den som slipper til i nyhetene.",
  },
  {
    id: "utdanning",
    title: "Utdanning",
    details:
      "Bachelor i statsvitenskap, NTNU (2018–2021). Bachelor i økonomi og administrasjon, OsloMet (2023–2026).",
    note: "Statsvitenskap kom først. Deretter økonomi. Det er ikke tilfeldig, men fordi jeg merket at politisk analyse uten forståelse for insentiver fort blir luftig. De to fagene leses bedre sammen enn hver for seg.",
  },
  {
    id: "ferdigheter",
    title: "Ferdigheter",
    details:
      "Forretningsutvikling, relasjonsbygging, stakeholder management, strategisk kommunikasjon, prosjektledelse.",
    note: "Utenom jobben løper jeg, spiller sjakk og lager mat. Jeg tror god tenkning krever friksjon, og at de beste samtalene starter med uenighet.",
  },
];

export default function OmMegPage() {
  return (
    <div className="min-h-screen text-[var(--color-foreground)]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="border-b border-[var(--color-border)] pb-10">
          <p className="font-condensed text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
            Om meg
          </p>
          <div className="mt-5 flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="flex-shrink-0 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]" style={{ width: 200, height: 260 }}>
              <Image
                src="/jakob.jpg"
                alt="Jakob Hake-Steffensen"
                width={200}
                height={260}
                className="h-[260px] w-[200px] object-cover object-top"
              />
            </div>
            <div className="sm:max-w-2xl">
              <h1 className="font-serif text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
                Jakob Hake-Steffensen
              </h1>
              <p className="mt-3 font-serif text-xl italic text-[var(--color-secondary)]">
                Statsviter, økonom og forretningsutvikler
              </p>
              <p className="mt-6 text-lg leading-8 text-[var(--color-secondary)]">
                Jeg har bakgrunn fra statsvitenskap og økonomi, og bruker kombinasjonen til å forstå hva som faktisk driver beslutninger – i markedet, i politikken og i rommene mellom dem. Til daglig jobber jeg med relasjonsbygging og forretningsutvikling.
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] transition hover:text-[var(--color-foreground)]"
                >
                  Tilbake til forsiden
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-14 divide-y divide-[var(--color-divider)]">
          {sections.map((section) => (
            <div key={section.id} className="py-8 first:pt-0">
              <h2 className="font-serif text-2xl font-bold uppercase tracking-tight text-[var(--color-foreground)]">
                {section.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-secondary)]">
                {section.details}
              </p>
              {section.note ? (
                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-secondary)]">
                  {section.note}
                </p>
              ) : null}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
