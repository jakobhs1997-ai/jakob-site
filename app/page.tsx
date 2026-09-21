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
      <div className="mx-auto max-w-5xl px-6 pt-6 sm:px-8 lg:px-12">
        <section className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:gap-8 lg:gap-10">
          <a
            href="https://www.linkedin.com/in/jeycup"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-[152px] w-[152px] flex-shrink-0 cursor-pointer overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:ring-2 hover:ring-[#c9a84c]"
          >
            <Image
              src="/jakob.jpg"
              alt="Jakob Hake-Steffensen"
              width={152}
              height={152}
              priority
              className="h-full w-full object-cover object-top"
            />
          </a>
          <div className="text-center sm:text-left">
            <span className="mx-auto block h-[2px] w-14 bg-[var(--color-accent)] sm:mx-0" />
            <h1 className="mt-3 font-serif text-3xl font-black leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl">
              Jakob Hake-Steffensen
            </h1>
            <p className="mx-auto mt-3 max-w-xs font-serif text-lg italic font-medium leading-snug text-[var(--color-secondary)] sm:mx-0 sm:text-xl">
              <span className="block">Skarp på sammenhenger.</span>
              <span className="block">Opptatt av det som faktisk skjer.</span>
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
            {secondaryArticles.length > 0 ? (
              <>
                <p className="mt-10 mb-4 font-condensed text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                  Siste artikler
                </p>
                <ArticleList articles={secondaryArticles} />
              </>
            ) : null}
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
