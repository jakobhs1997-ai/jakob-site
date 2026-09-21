import Link from "next/link";
import type { Article } from "@/lib/articles";
import { formatArticleDate } from "@/lib/articles";

export function FeaturedArticle({
  article,
  eyebrow,
  variant = "default",
}: {
  article: Article;
  eyebrow?: string;
  /** "compact" drops the eyebrow label, shrinks the title, and swaps the heavy bottom border for a thin divider matching ArticleList. */
  variant?: "default" | "compact";
}) {
  const formattedDate = formatArticleDate(article.date);
  const isCompact = variant === "compact";

  return (
    <Link
      href={`/artikler/${article.slug}`}
      className={`group block py-10 transition sm:py-12 ${
        isCompact
          ? "border-b border-[var(--color-divider)]"
          : "border-b-2 border-[var(--color-foreground)]"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        {eyebrow ? (
          <span className="font-condensed text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            {eyebrow}
          </span>
        ) : null}
        <span className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
          {[article.category, formattedDate].filter(Boolean).join(" · ")}
        </span>
      </div>
      <h2
        className={`mt-8 max-w-4xl font-serif font-bold leading-[1.05] tracking-tight text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)] ${
          isCompact ? "text-4xl sm:text-5xl" : "text-4xl sm:text-5xl lg:text-6xl"
        }`}
      >
        {article.title}
      </h2>
      <p className="mt-5 max-w-xl text-lg leading-7 text-[var(--color-secondary)]">
        {article.summary}
      </p>
      <span className="mt-6 inline-flex items-center gap-1.5 font-condensed text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)] transition-colors group-hover:text-[var(--color-foreground)]">
        Les artikkel
        <span aria-hidden="true">→</span>
      </span>
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
            <h3 className="mt-4 font-serif text-2xl font-bold tracking-tight text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)] sm:text-3xl">
              {article.title}
            </h3>
            <p className="mt-3 max-w-xl text-base leading-7 text-[var(--color-secondary)]">
              {article.summary}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
