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
      <div className="mx-auto max-w-5xl px-6 pt-16 sm:px-8 lg:px-12">
        <section className="mx-auto max-w-3xl space-y-6 text-center">
          <span className="mx-auto block h-[2px] w-16 bg-[var(--color-accent)]" />
          <div className="mx-auto h-[192px] w-[192px] overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
            <Image
              src="/jakob.jpg"
              alt="Jakob Hake-Steffensen"
              width={192}
              height={192}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
          <h1 className="font-serif text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Jakob Hake-Steffensen
          </h1>
          <p className="font-serif text-2xl italic leading-snug text-[var(--color-secondary)] sm:text-3xl">
            Skarp på sammenhenger. Opptatt av det som faktisk skjer.
          </p>
        </section>
      </div>

      <div className="mt-14 w-full bg-[var(--color-ink)]">
        <div className="mx-auto max-w-5xl px-6 py-6 sm:px-8 sm:py-8 lg:px-12">
          <p className="font-condensed text-sm uppercase tracking-[0.2em] text-[var(--color-off-white)]">
            Statsvitenskap og økonomi. Skriver om det jeg legger merke til.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
        <section className="border-t border-[var(--color-accent)] pt-10">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Seneste tanker
          </h2>

          <div className="mt-10">
            {featuredArticle ? <FeaturedArticle article={featuredArticle} eyebrow="Utvalgt" /> : null}
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
