"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/artikler", label: "Artikler" },
  { href: "/om-meg", label: "Om meg" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-8 lg:px-12">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-[var(--color-off-white)] transition hover:text-[var(--color-accent)] sm:text-2xl"
        >
          Jakob Hake-Steffensen
        </Link>
        <nav className="flex gap-10 font-condensed text-xs font-semibold uppercase tracking-[0.18em]">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-2 transition ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-off-white)] hover:text-[var(--color-accent)]"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-[var(--color-accent)]" />
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
