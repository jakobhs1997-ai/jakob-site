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
        <section className="flex flex-col items-center gap-8 sm:flex-row sm:gap-14 lg:gap-16">
          <a
            href="https://www.linkedin.com/in/jeycup"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-[4/5] w-full max-w-[280px] cursor-pointer overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:ring-2 hover:ring-[#c9a84c] sm:aspect-auto sm:w-[220px] sm:flex-shrink-0 sm:self-stretch"
          >
            <Image
              src="/jakob.jpg"
              alt="Jakob Hake-Steffensen"
              fill
              priority
              sizes="(min-width: 640px) 220px, 100vw"
              className="object-cover object-top"
            />
          </a>
          <div className="text-center sm:text-left">
            <span className="mx-auto block h-[2px] w-16 bg-[var(--color-accent)] sm:mx-0" />
            <h1 className="mt-4 font-serif text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:whitespace-nowrap lg:text-6xl">
              Jakob Hake-Steffensen
            </h1>
            <p className="mt-2 font-serif text-2xl italic leading-snug text-[var(--color-secondary)] sm:text-3xl">
              Skarp på sammenhenger. Opptatt av det som faktisk skjer.
            </p>
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-8 pb-16 sm:px-8 lg:px-12">
        <section className="border-t border-[var(--color-accent)] pt-6">
          <div>
            {featuredArticle ? (
              <FeaturedArticle article={featuredArticle} variant="compact" />
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
