import Link from "next/link";
import type { Article } from "@/lib/articles";
import { formatArticleDate, calculateReadingTime } from "@/lib/articles";

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
  const readingMinutes = calculateReadingTime(article.content);
  const isCompact = variant === "compact";

  return (
    <Link
      href={`/artikler/${article.slug}`}
      className={`group block pt-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-text)] sm:pt-12 ${
        isCompact
          ? "border-b border-[var(--color-divider)] pb-8 sm:pb-9"
          : "border-b-2 border-[var(--color-foreground)] pb-10 sm:pb-12"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        {eyebrow ? (
          <span className="font-condensed text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-text)]">
            {eyebrow}
          </span>
        ) : null}
        <span className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
          {[article.category, formattedDate, `${readingMinutes} min`].filter(Boolean).join(" · ")}
        </span>
      </div>
      <h2
        className={`mt-8 max-w-4xl font-serif font-bold leading-[1.05] tracking-tight text-[var(--color-foreground)] ${
          isCompact ? "text-[34px] sm:text-[44px]" : "text-4xl sm:text-5xl lg:text-6xl"
        }`}
      >
        <span className="bg-[linear-gradient(var(--accent-text),var(--accent-text))] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-[0.15em] transition-[background-size] duration-200 ease-out motion-reduce:transition-none group-hover:bg-[length:100%_1px] group-focus-visible:bg-[length:100%_1px]">
          {article.title}
        </span>
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-7 text-[var(--color-secondary)]">
        {article.summary}
      </p>
      <span className="mt-3 inline-flex items-center gap-1.5 font-condensed text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent-text)] transition-colors group-hover:text-[var(--color-foreground)] md:mt-6">
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
        const readingMinutes = calculateReadingTime(article.content);
        return (
          <Link
            key={article.slug}
            href={`/artikler/${article.slug}`}
            className="group block border-t border-[var(--color-divider)] py-8 last:border-b focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent-text)]"
          >
            <div className="flex items-baseline justify-between gap-x-6">
              {article.category ? (
                <span className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  {article.category}
                </span>
              ) : (
                <span />
              )}
              {formattedDate ? (
                <span className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  {[formattedDate, `${readingMinutes} min`].filter(Boolean).join(" · ")}
                </span>
              ) : null}
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-3xl">
              <span className="bg-[linear-gradient(var(--accent-text),var(--accent-text))] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-[0.15em] transition-[background-size] duration-200 ease-out motion-reduce:transition-none group-hover:bg-[length:100%_1px] group-focus-visible:bg-[length:100%_1px]">
                {article.title}
              </span>
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
