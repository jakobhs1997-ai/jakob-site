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
        <section className="max-w-3xl space-y-6">
          <span className="block h-[2px] w-16 bg-[var(--color-accent)]" />
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="h-[140px] w-[140px] flex-shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
              <Image
                src="/jakob.jpg"
                alt="Jakob Hake-Steffensen"
                width={140}
                height={140}
                priority
                className="h-full w-full object-cover object-top"
              />
            </div>
            <h1 className="text-center font-serif text-6xl font-black leading-[0.95] tracking-tight sm:text-left sm:text-7xl lg:text-8xl">
              Jakob Hake-Steffensen
            </h1>
          </div>
          <p className="font-serif text-2xl italic leading-snug text-[var(--color-secondary)] sm:text-3xl">
            Skarp på sammenhenger. Opptatt av det som faktisk skjer.
          </p>
          <p className="text-sm font-light leading-relaxed text-[var(--color-secondary)]">
            Skriver om politikk, økonomi og det som skjer i rommene mellom dem.
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
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-condensed text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                Utvalgte artikler
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                Seneste tanker
              </h2>
            </div>
          </div>

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
