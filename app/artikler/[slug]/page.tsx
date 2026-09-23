import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, formatArticleDate } from "@/lib/articles";
import ReadingProgress from "@/app/components/ReadingProgress";

export async function generateMetadata({ params }: { params: any }) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams?.slug || params.slug);
  return {
    title: article ? `${article.title} – Jakob Hake-Steffensen` : "Artikkel",
    description: article?.summary ?? undefined,
  };
}

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = articles.find((item) => item.slug === resolvedParams.slug);
  if (!article) {
    notFound();
  }

  const formattedDate = formatArticleDate(article.date);
  const wordCount = article.content.trim().split(/\s+/).filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.round(wordCount / 200));
  const meta = [article.category, formattedDate, `${readingMinutes} min lesetid`].filter(Boolean);

  return (
    <div className="min-h-screen text-[var(--color-foreground)]">
      {wordCount > 600 ? <ReadingProgress /> : null}
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-10 sm:px-8 sm:pt-12 lg:px-12">
        <div className="border-b border-[var(--color-border)] pb-8">
          <Link
            href="/artikler"
            className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] transition hover:text-[var(--color-foreground)]"
          >
            ← Alle artikler
          </Link>
          <p className="mt-5 font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            {meta.map((item, i) => (
              <span key={i}>
                {i > 0 ? " · " : null}
                {i === 0 && article.category ? (
                  <span className="text-[var(--color-accent)]">{item}</span>
                ) : (
                  item
                )}
              </span>
            ))}
          </p>
          <h1 className="mt-3 font-serif text-[32px] font-black leading-[1.05] tracking-tight sm:text-[42px] lg:text-[49px]">
            {article.title}
          </h1>
        </div>

        <p className="mt-8 max-w-[34rem] font-serif text-[22px] leading-[1.5] text-[var(--color-foreground)] sm:mt-10 sm:text-[25px]">
          {article.summary}
        </p>

        <article className="mt-10 max-w-[40rem] space-y-6 sm:mt-12">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-[18px] leading-[1.7] text-[var(--color-secondary)] sm:text-[20px]"
            >
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </div>
  );
}
