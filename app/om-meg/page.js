export const metadata = {
  title: 'Om meg – Jakob Hake-Steffensen',
  description: 'Bakgrunn, erfaring og ferdigheter.',
};

import Image from "next/image";

const sections = [
  {
    id: "erfaring",
    title: "Erfaring",
    details:
      "Medgrunnlegger og eventkoordinator i NJORD maritime studentforening (200+ medlemmer). Løpeinstruktør ved SATS. Deltaker i Kongsberg Gruppens Your Extreme 48-timers casekonkurranse (2018 og 2019). Tidligere butikkselger, hovmester og vikarierende lærer.",
  },
  {
    id: "utdanning",
    title: "Utdanning",
    details:
      "Bachelor i økonomi og administrasjon, OsloMet (2023–2026). Bachelor i statsvitenskap, NTNU (2018–2021).",
  },
  {
    id: "ferdigheter",
    title: "Ferdigheter",
    details:
      "Forretningsutvikling, relasjonsbygging, stakeholder management, strategisk kommunikasjon, prosjektledelse.",
  },
];

export default function OmMegPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="border-b border-[var(--color-border)] pb-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Om meg</p>
          </div>
          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-center">
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
              <h1 className="text-4xl font-serif font-semibold tracking-tight sm:text-5xl">
                Jakob Hake-Steffensen
              </h1>
              <p className="mt-6 text-lg leading-8 text-[var(--color-secondary)]">
                Jeg har bakgrunn fra statsvitenskap og økonomi, og bruker det til å forstå hva som faktisk driver beslutninger — i markedet, i politikken og i rommene mellom dem. Til daglig jobber jeg med relasjonsbygging og forretningsutvikling, og er med på å drive NJORD maritime studentforening.
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="text-sm text-[var(--color-accent)] hover:text-[var(--color-foreground)] transition"
                >
                  Tilbake til forsiden
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.id}>
              <h2 className="text-2xl font-serif font-semibold tracking-tight text-[var(--color-foreground)]">
                {section.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-secondary)]">
                {section.details}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
