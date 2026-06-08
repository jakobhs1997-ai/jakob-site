import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jakob Hake-Steffensen",
  description: "Personlig nettside for tekster om statsvitenskap, økonomi og samfunn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <footer className="mt-auto border-t border-[var(--color-border)] bg-transparent">
          <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between sm:px-8 lg:px-12">
            <p className="text-sm text-[var(--color-secondary)]">Jakob Hake-Steffensen</p>
            <a
              href="https://linkedin.com/in/jeycup/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center text-[var(--accent)] hover:text-[var(--accent)] transition"
            >
              <span className="sr-only">LinkedIn</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.4v4.57h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.6v5.74z" />
              </svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
