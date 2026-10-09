import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, formatArticleDate } from "@/lib/articles";
import ReadingProgress from "@/app/components/ReadingProgress";
import { ArticleList } from "@/app/components/Articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  if (!article) {
    return { title: "Artikkel" };
  }
  const title = `${article.title} – Jakob Hake-Steffensen`;
  const url = `/artikler/${article.slug}`;
  return {
    title,
    description: article.summary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: article.summary,
      url,
      images: [{ url: "/og-image.png", width: 1584, height: 396 }],
    },
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
  const relatedArticles = article.category
    ? articles
        .filter((item) => item.slug !== article.slug && item.category === article.category)
        .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
        .slice(0, 3)
    : [];

  return (
    <main className="min-h-screen text-[var(--color-foreground)]">
      {wordCount > 600 ? <ReadingProgress /> : null}
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-10 sm:px-8 sm:pt-12 lg:px-12">
        <div className="border-b border-[var(--color-border)] pb-8">
          <Link
            href="/artikler"
            className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-text)] transition hover:text-[var(--color-foreground)]"
          >
            ← Alle artikler
          </Link>
          <p className="mt-4 font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            {meta.map((item, i) => (
              <span key={i}>
                {i > 0 ? " · " : null}
                {i === 0 && article.category ? (
                  <span className="text-[var(--color-accent-text)]">{item}</span>
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

        <p className="mt-8 max-w-[34rem] font-serif text-[21px] leading-[1.5] text-[var(--color-body)] sm:mt-10 sm:text-[23px]">
          {article.summary}
        </p>

        <article className="mt-12 max-w-[40rem] space-y-6 sm:mt-14">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-[18px] leading-[1.7] text-[var(--color-body)] sm:text-[19px]"
            >
              {paragraph}
            </p>
          ))}
        </article>

        {relatedArticles.length > 0 ? (
          <div className="mt-16 max-w-[40rem] border-t border-[var(--color-divider)] pt-10">
            <p className="mb-4 flex items-center gap-3 font-condensed text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent-text)]">
              <span aria-hidden="true" className="h-px w-6 bg-[var(--color-accent)]" />
              Relaterte artikler
            </p>
            <ArticleList articles={relatedArticles} />
          </div>
        ) : null}
      </div>
    </main>
  );
}
