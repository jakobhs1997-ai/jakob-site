export const metadata = {
  title: "Personvern – Jakob Hake-Steffensen",
  description: "Hvordan e-postadressen din behandles når du abonnerer på nye artikler.",
  alternates: { canonical: "/personvern" },
  openGraph: {
    title: "Personvern – Jakob Hake-Steffensen",
    description: "Hvordan e-postadressen din behandles når du abonnerer på nye artikler.",
    url: "/personvern",
  },
};

export default function PersonvernPage() {
  return (
    <main id="innhold" tabIndex={-1} className="min-h-screen text-[var(--color-foreground)] focus:outline-none">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:px-12">
        <p className="font-condensed text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
          Personvern
        </p>
        <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
          Slik behandler jeg e-postadressen din
        </h1>

        <div className="mt-10 space-y-8 text-base leading-8 text-[var(--color-body)]">
          <section>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
              Behandlingsansvarlig
            </h2>
            <p className="mt-3">
              Jakob Hake-Steffensen er behandlingsansvarlig. Kontakt:{" "}
              <a href="mailto:kontakt@jeycup.com" className="underline underline-offset-2">
                kontakt@jeycup.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
              Hva jeg lagrer
            </h2>
            <p className="mt-3">
              Når du abonnerer, lagrer jeg e-postadressen din og tidspunktet for påmeldingen. Jeg samler ikke inn noe annet.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
              Formål og grunnlag
            </h2>
            <p className="mt-3">
              Adressen brukes bare til å sende deg nye artikler fra jeycup.com. Grunnlaget er samtykket ditt, som du gir ved å bekrefte påmeldingen i e-posten du mottar. Du kan trekke samtykket tilbake når som helst.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
              Databehandlere
            </h2>
            <p className="mt-3">
              E-postadressen lagres hos MailerLite UAB i Litauen, som sender e-postene. Nettsiden driftes av Vercel, som mottar påmeldingen før den sendes videre til MailerLite.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
              Hvor lenge
            </h2>
            <p className="mt-3">
              Adressen lagres til du melder deg av. Hver e-post har en avmeldingslenke nederst.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
              Informasjonskapsler og sporing
            </h2>
            <p className="mt-3">
              Nettsiden bruker ingen informasjonskapsler og ingen sporing.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
              Dine rettigheter
            </h2>
            <p className="mt-3">
              Du kan be om innsyn i, retting av eller sletting av opplysningene dine ved å skrive til{" "}
              <a href="mailto:kontakt@jeycup.com" className="underline underline-offset-2">
                kontakt@jeycup.com
              </a>
              . Du kan også klage til Datatilsynet.
            </p>
          </section>

          <p className="text-sm text-[var(--color-secondary)]">Sist oppdatert november 2026.</p>
        </div>
      </div>
    </main>
  );
}
