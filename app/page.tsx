import Image from "next/image";
import Link from "next/link";
import { articles, sortedByDateDesc } from "@/lib/articles";
import { FeaturedArticle, ArticleList } from "@/app/components/Articles";

export default function Home() {
  const sorted = sortedByDateDesc(articles);
  const [featuredArticle, ...restArticles] = sorted;
  const secondaryArticles = restArticles.slice(0, 3);

  return (
    <div className="min-h-screen text-[var(--color-foreground)]">
      <div className="mx-auto max-w-5xl px-6 pt-8 sm:px-8 lg:px-12">
        <section className="mx-auto max-w-3xl text-center">
          <span className="mx-auto block h-[2px] w-16 bg-[var(--color-accent)]" />
          <div className="mx-auto mt-3 h-[192px] w-[192px] overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
            <Image
              src="/jakob.jpg"
              alt="Jakob Hake-Steffensen"
              width={192}
              height={192}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
          <h1 className="mt-4 font-serif text-4xl font-black leading-[0.95] tracking-tight sm:whitespace-nowrap sm:text-5xl lg:text-6xl">
            Jakob Hake-Steffensen
          </h1>
          <p className="mt-2 font-serif text-2xl italic leading-snug text-[var(--color-secondary)] sm:text-3xl">
            Skarp på sammenhenger. Opptatt av det som faktisk skjer.
          </p>
        </section>
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-8 pb-16 sm:px-8 lg:px-12">
        <section className="border-t border-[var(--color-accent)] pt-6">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Seneste tanker
          </h2>

          <div>
            {featuredArticle ? (
              <FeaturedArticle article={featuredArticle} eyebrow="Utvalgt" compactTop />
            ) : null}
            {secondaryArticles.length > 0 ? <ArticleList articles={secondaryArticles} /> : null}
          </div>

          <div className="mt-10 flex justify-end">
            <Link
              href="/artikler"
              className="font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] transition hover:text-[var(--color-foreground)]"
            >
              Se alle artikler →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
