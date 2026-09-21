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
        <section className="flex flex-col items-center gap-8 sm:flex-row sm:items-end sm:gap-14 lg:gap-16">
          <a
            href="https://www.linkedin.com/in/jeycup"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-[232px] w-[232px] flex-shrink-0 cursor-pointer overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:ring-2 hover:ring-[#c9a84c]"
          >
            <Image
              src="/jakob.jpg"
              alt="Jakob Hake-Steffensen"
              width={232}
              height={232}
              priority
              className="h-full w-full object-cover object-top"
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

      <div className="mx-auto max-w-5xl px-6 pt-6 pb-16 sm:px-8 lg:px-12">
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
