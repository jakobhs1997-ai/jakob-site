import Link from "next/link";
import { articles } from "@/lib/articles";

export default function ArticlesPage() {
  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0;
    const dateB = b.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-12">
        <Link href="/" className="text-sm text-[var(--color-accent)] hover:text-[var(--color-foreground)] transition">
          ← Forsiden
        </Link>
        <header className="border-b border-[var(--color-border)] pb-8 mt-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Artikler</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl">
            Alle artikler
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-secondary)]">
            Her finner du alle publiserte artikler, sortert fra nyeste til eldste.
          </p>
        </header>

        <div className="mt-10 grid gap-6">
          {sortedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/artikler/${article.slug}`}
              className="block rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition hover:border-[var(--color-accent)] hover:bg-[#20232a]"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">Artikkel</p>
                {article.date ? (
                  <p className="text-xs text-[var(--color-secondary)]">{new Date(article.date).toLocaleDateString("nb-NO")}</p>
                ) : null}
              </div>
              <h2 className="mt-4 text-2xl font-serif font-semibold">{article.title}</h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-secondary)]">{article.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
