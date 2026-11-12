import Link from "next/link";
import { articles, sortedByDateDesc } from "@/lib/articles";
import { ArticleList } from "@/app/components/Articles";

export const metadata = {
  title: "Siden finnes ikke – Jakob Hake-Steffensen",
};

export default function NotFound() {
  const latest = sortedByDateDesc(articles).slice(0, 3);

  return (
    <main
      id="innhold"
      tabIndex={-1}
      className="min-h-screen text-[var(--color-foreground)] focus:outline-none"
    >
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-16 sm:px-8 lg:px-12">
        <p className="font-condensed text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl font-black tracking-tight [text-wrap:balance] sm:text-5xl">
          Siden finnes ikke
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--color-body)] [text-wrap:pretty]">
          Adressen kan være skrevet feil, eller siden er flyttet. Her er de nyeste artiklene.
        </p>
        <div className="mt-6 flex gap-8">
          <Link
            href="/"
            className="link-underline font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-text)]"
          >
            Til forsiden
          </Link>
          <Link
            href="/artikler"
            className="link-underline font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-text)]"
          >
            Alle artikler
          </Link>
        </div>

        {latest.length > 0 ? (
          <div className="mt-12">
            <ArticleList articles={latest} />
          </div>
        ) : null}
      </div>
    </main>
  );
}
