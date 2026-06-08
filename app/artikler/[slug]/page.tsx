import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export const dynamic = "force-dynamic";

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-secondary)]">Artikkel</p>
          <h1 className="mt-4 text-4xl font-serif font-semibold tracking-tight sm:text-5xl">
            {article.title}
          </h1>
          {article.date ? (
            <p className="mt-3 text-sm text-[var(--color-secondary)]">{article.date}</p>
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
