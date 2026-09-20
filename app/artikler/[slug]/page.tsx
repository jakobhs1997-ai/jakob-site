import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, formatArticleDate } from "@/lib/articles";

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

  return (
    <div className="min-h-screen text-[var(--color-foreground)]">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="mb-10 border-b border-[var(--color-border)] pb-10">
          <Link
            href="/artikler"
            className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] transition hover:text-[var(--color-foreground)]"
          >
            ← Alle artikler
          </Link>
          {article.category ? (
            <p className="mt-6 font-condensed text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              {article.category}
            </p>
          ) : null}
          <h1 className="mt-4 font-serif text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
            {article.title}
          </h1>
          {formattedDate ? (
            <p className="mt-5 font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
              {formattedDate}
            </p>
          ) : null}
        </div>

        <article className="space-y-7">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-[18px] leading-[1.8] text-[var(--color-secondary)] sm:text-[19px]"
            >
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </div>
  );
}
