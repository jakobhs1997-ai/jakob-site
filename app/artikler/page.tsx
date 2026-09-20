import Link from "next/link";
import { articles, sortedByDateDesc } from "@/lib/articles";
import { FeaturedArticle, ArticleList } from "@/app/components/Articles";

export const metadata = {
  title: "Artikler – Jakob Hake-Steffensen",
  description: "Alle publiserte artikler, sortert fra nyeste til eldste.",
};

export default function ArticlesPage() {
  const sortedArticles = sortedByDateDesc(articles);
  const [featuredArticle, ...restArticles] = sortedArticles;

  return (
    <div className="min-h-screen text-[var(--color-foreground)]">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] transition hover:text-[var(--color-foreground)]"
        >
          ← Forsiden
        </Link>

        <div className="mt-8 border-b border-[var(--color-border)] pb-10">
          <p className="font-condensed text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
            Artikler
          </p>
          <h1 className="mt-4 font-serif text-5xl font-black uppercase tracking-tight sm:text-6xl">
            Alle artikler
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-secondary)]">
            Her finner du alle publiserte artikler, sortert fra nyeste til eldste.
          </p>
        </div>

        <div className="mt-10">
          {featuredArticle ? <FeaturedArticle article={featuredArticle} /> : null}
          {restArticles.length > 0 ? <ArticleList articles={restArticles} /> : null}
        </div>
      </div>
    </div>
  );
}
