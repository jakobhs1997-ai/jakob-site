import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";

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
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Artikkel</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          {formattedDate ? (
            <p className="mt-3 text-sm text-[var(--color-secondary)]">{formattedDate}</p>
          ) : null}
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 rounded-md border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-background)] transition"
            >
              Tilbake til forsiden
            </Link>
          </div>
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
