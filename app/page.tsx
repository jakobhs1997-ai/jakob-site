import Link from "next/link";
import { articles } from "@/lib/articles";

export default function Home() {
  const featured = [...articles]
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-6 border-b border-[var(--color-border)] pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Jakob Hake-Steffensen</p>
          </div>
          <nav className="flex gap-8 text-sm font-medium text-[var(--color-foreground)]">
            <a href="#articles" className="transition text-[var(--header-foreground)] hover:text-[var(--color-accent)]">Artikler</a>
            <a href="/om-meg" className="transition text-[var(--header-foreground)] hover:text-[var(--color-accent)]">Om meg</a>
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
              {featured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/artikler/${article.slug}`}
                  className="block rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition hover:border-[var(--color-accent)] hover:bg-[#20232a]"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">Artikkel</p>
                  <h3 className="mt-4 text-2xl font-serif font-semibold">{article.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--color-secondary)]">{article.summary}</p>
                </Link>
              ))}
            </div>
            <div className="flex justify-end">
              <Link
                href="/artikler"
                className="text-sm text-[var(--color-accent)] hover:text-[var(--color-foreground)] transition"
              >
                Se alle artikler →
              </Link>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
