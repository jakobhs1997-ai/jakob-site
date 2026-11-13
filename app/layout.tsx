import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter_Tight } from "next/font/google";
import Link from "next/link";
import Header from "./components/Header";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: "Statsvitenskap og økonomi. Skriver om det jeg legger merke til.",
  verification: {
    google: "DAKn-eyo5C2tVpKDL7sBHeFl1qsLh8T5H5VTRs8puTk",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_NAME,
    description: "Statsvitenskap og økonomi. Skriver om det jeg legger merke til.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#innhold"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10001] focus:bg-[var(--color-off-white)] focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-ink)] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-accent)]"
        >
          Hopp til innhold
        </a>
        <Header />
        {children}

        <footer className="mt-auto border-t border-[#c9a84c]/30 bg-[var(--color-ink)]">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-1 font-condensed text-xs uppercase tracking-[0.15em] text-[var(--color-off-white)]">
              <p className="opacity-70">Jakob Hake-Steffensen</p>
              <p className="flex flex-wrap gap-x-4 gap-y-1">
                <a
                  href="mailto:kontakt@jeycup.com"
                  className="link-underline text-[var(--color-off-white)] opacity-70 transition hover:opacity-100"
                >
                  kontakt@jeycup.com
                </a>
                <Link
                  href="/personvern"
                  className="link-underline text-[var(--color-off-white)] opacity-70 transition hover:opacity-100"
                >
                  Personvern
                </Link>
              </p>
            </div>
            <a
              href="https://linkedin.com/in/jeycup/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center text-[var(--color-off-white)] opacity-70 transition hover:opacity-100"
            >
              <span className="sr-only">LinkedIn</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.4v4.57h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.6v5.74z" />
              </svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
