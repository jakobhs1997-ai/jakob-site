import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";

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

  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString("nb-NO")
    : null;

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="mb-8">
          <Link
            href="/artikler"
            className="text-sm text-[var(--color-accent)] hover:text-[var(--color-foreground)] transition"
          >
            ← Alle artikler
          </Link>
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Artikkel</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          {formattedDate ? (
            <p className="mt-3 text-sm text-[var(--color-secondary)]">{formattedDate}</p>
          ) : null}
        </div>

        <article className="space-y-6">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="leading-8 text-[var(--color-secondary)]">
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </div>
  );
}
