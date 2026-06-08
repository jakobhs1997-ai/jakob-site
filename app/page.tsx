export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-6 border-b border-zinc-200 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Jakob Hake-Steffensen</p>
          </div>
          <nav className="flex gap-8 text-sm font-medium text-zinc-800">
            <a href="#articles" className="transition hover:text-black">Artikler</a>
            <a href="/om-meg" className="transition hover:text-black">Om meg</a>
          </nav>
        </header>

        <main className="mt-12 space-y-16">
          <section className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Velkommen</p>
            <h1 className="text-5xl font-serif font-semibold tracking-tight text-black sm:text-6xl">
              Statsvitenskap & økonomi.
            </h1>
            <p className="text-xl leading-9 text-zinc-700">
              Skriver om det jeg legger merke til.
            </p>
          </section>

          <section id="articles" className="space-y-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Utvalgte artikler</p>
                <h2 className="mt-3 text-3xl font-serif font-semibold tracking-tight text-black">Seneste tanker</h2>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Placeholder</p>
                <h3 className="mt-4 text-2xl font-serif font-semibold text-black">Hva betyr Norges rolle i EUs energiomstilling?</h3>
                <p className="mt-4 text-base leading-7 text-zinc-700">
                  En kort introduksjon til hvordan energipolitikk og økonomi møtes i nordisk kontekst.
                </p>
              </article>

              <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Placeholder</p>
                <h3 className="mt-4 text-2xl font-serif font-semibold text-black">Demokrati og markedsøkonomi: hva kan vi lære?</h3>
                <p className="mt-4 text-base leading-7 text-zinc-700">
                  Refleksjoner om politiske tendenser og økonomiske rammeverk i dagens samfunn.
                </p>
              </article>

              <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Placeholder</p>
                <h3 className="mt-4 text-2xl font-serif font-semibold text-black">Hvordan skrive tydelig om kompliserte temaer</h3>
                <p className="mt-4 text-base leading-7 text-zinc-700">
                  En tekst om formidling, oppmerksomhet og hvordan jeg jobber med idéer.
                </p>
              </article>
            </div>
          </section>

          <section id="about" className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Om meg</p>
            <p className="text-base leading-8 text-zinc-700">
              Jeg er opptatt av politikk, økonomi og samfunn, og jeg bruker denne plattformen til å dele observasjoner og analyser. Her samler jeg artikler og tekster som gir rom for refleksjon uten støy.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
