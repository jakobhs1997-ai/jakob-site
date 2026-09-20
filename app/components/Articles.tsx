import Link from "next/link";
import type { Article } from "@/lib/articles";
import { formatArticleDate } from "@/lib/articles";

export function FeaturedArticle({
  article,
  eyebrow = "Nyeste artikkel",
}: {
  article: Article;
  eyebrow?: string;
}) {
  const formattedDate = formatArticleDate(article.date);

  return (
    <Link
      href={`/artikler/${article.slug}`}
      className="group block border-b-2 border-[var(--color-foreground)] py-10 transition sm:py-12"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <span className="font-condensed text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
          {eyebrow}
        </span>
        <span className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
          {[article.category, formattedDate].filter(Boolean).join(" · ")}
        </span>
      </div>
      <h2 className="mt-6 max-w-4xl font-serif text-4xl font-bold leading-[1.05] tracking-tight text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)] sm:text-5xl lg:text-6xl">
        {article.title}
      </h2>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-secondary)]">
        {article.summary}
      </p>
    </Link>
  );
}

export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div>
      {articles.map((article) => {
        const formattedDate = formatArticleDate(article.date);
        return (
          <Link
            key={article.slug}
            href={`/artikler/${article.slug}`}
            className="group block border-t border-[var(--color-divider)] py-8 transition last:border-b"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              {article.category ? (
                <span className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  {article.category}
                </span>
              ) : (
                <span />
              )}
              {formattedDate ? (
                <span className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  {formattedDate}
                </span>
              ) : null}
            </div>
            <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)] sm:text-3xl">
              {article.title}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-secondary)]">
              {article.summary}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
