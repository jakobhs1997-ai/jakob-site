export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-6 border-b border-[var(--color-border)] pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Jakob Hake-Steffensen</p>
          </div>
          <nav className="flex gap-8 text-sm font-medium text-[var(--color-foreground)]">
            <a href="#articles" className="transition text-[var(--color-accent)] hover:text-[var(--color-foreground)]">Artikler</a>
            <a href="/om-meg" className="transition text-[var(--color-accent)] hover:text-[var(--color-foreground)]">Om meg</a>
          </nav>
        </header>

        <main className="mt-12 space-y-16">
          <section className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Velkommen</p>
            <h1 className="text-4xl font-serif font-semibold tracking-tight sm:text-5xl">
              Skarp på sammenhenger. Opptatt av det som faktisk skjer.
            </h1>
            <p className="text-xl leading-9 text-[var(--color-secondary)]">
              Skriver om det jeg legger merke til.
            </p>
          </section>

          <section id="articles" className="space-y-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Utvalgte artikler</p>
                <h2 className="mt-3 text-3xl font-serif font-semibold tracking-tight">Seneste tanker</h2>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">Placeholder</p>
                <h3 className="mt-4 text-2xl font-serif font-semibold">Hva betyr Norges rolle i EUs energiomstilling?</h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-secondary)]">
                  En kort introduksjon til hvordan energipolitikk og økonomi møtes i nordisk kontekst.
                </p>
              </article>

              <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">Placeholder</p>
                <h3 className="mt-4 text-2xl font-serif font-semibold">Demokrati og markedsøkonomi: hva kan vi lære?</h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-secondary)]">
                  Refleksjoner om politiske tendenser og økonomiske rammeverk i dagens samfunn.
                </p>
              </article>

              <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">Placeholder</p>
                <h3 className="mt-4 text-2xl font-serif font-semibold">Hvordan skrive tydelig om kompliserte temaer</h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-secondary)]">
                  En tekst om formidling, oppmerksomhet og hvordan jeg jobber med idéer.
                </p>
              </article>
            </div>
          </section>

          <section id="about" className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Om meg</p>
            <p className="text-base leading-8 text-[var(--color-secondary)]">
              Jeg er opptatt av politikk, økonomi og samfunn, og jeg bruker denne plattformen til å dele observasjoner og analyser. Her samler jeg artikler og tekster som gir rom for refleksjon uten støy.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
