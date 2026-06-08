"use client";

import Image from "next/image";
import { useState } from "react";

const sections = [
  {
    id: "erfaring",
    title: "Erfaring",
    summary: "Bred erfaring innen rådgivning, undervisning og prosjektarbeid.",
    details:
      "Jeg har jobbet med rådgivende salg, undervisning og operativ drift, samtidig som jeg har bygget opp studentprosjekter og faglige nettverk. Blant annet har jeg vært butikkselger i John Henric, løpeinstruktør i SATS, vikarierende lærer i Nesodden kommune, og hovmester i Taste og View by Taste.",
  },
  {
    id: "utdanning",
    title: "Utdanning",
    summary: "Dobbel bachelor i økonomi og statsvitenskap.",
    details:
      "Jeg har en bachelor i økonomi og administrasjon fra OsloMet (2023–2026), og en bachelor i statsvitenskap fra NTNU (2018–2021). Bacheloroppgavene mine fokuserer på atferdsøkonomi, donoradferd og geopolitiske konsekvenser av kinesisk bistand.",
  },
  {
    id: "ferdigheter",
    title: "Ferdigheter",
    summary: "Praktiske og analytiske ferdigheter fra både prosjektarbeid og dataanalyse.",
    details:
      "Jeg kombinerer relasjonsbygging og strategisk kommunikasjon med kvantitativ analyse. Nøkkelferdigheter inkluderer business development, stakeholder management, prosjektledelse, OLS-regresjon, kvantitativ analyse og god bruk av Microsoft 365.",
  },
];

export default function OmMegPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-12">
        <header className="border-b border-zinc-200 pb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">Om meg</p>
          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex-shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100" style={{ width: 150, height: 150 }}>
              <Image
                src="/jakob.jpg"
                alt="Jakob Hake-Steffensen"
                width={150}
                height={150}
                className="h-[150px] w-[150px] object-cover"
              />
            </div>
            <div className="sm:max-w-2xl">
              <h1 className="text-4xl font-serif font-semibold tracking-tight text-black sm:text-5xl">
                Jakob Hake-Steffensen
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-700">
                Jeg skriver om politikk, økonomi og samfunn med blikk for både analyse og mennesker. I arbeidet mitt prøver jeg å gjøre komplekse temaer mer forståelige, samtidig som jeg tar hensyn til praktiske konsekvenser.
              </p>
              <div className="mt-8">
                <a
                  href="/"
                  className="inline-flex rounded-full border border-zinc-900 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
                >
                  Tilbake til forsiden
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-12 space-y-4">
          {sections.map((section) => {
            const isOpen = openSection === section.id;
            return (
              <div key={section.id} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`${section.id}-content`}
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">{section.title}</p>
                    <p className="mt-3 text-base leading-7 text-zinc-700">{section.summary}</p>
                  </div>
                  <span className="text-2xl font-semibold text-zinc-900">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? (
                  <div id={`${section.id}-content`} className="border-t border-zinc-200 px-6 pb-6 text-zinc-700">
                    <p className="pt-4 text-base leading-8">{section.details}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </section>

        <div className="mt-14 border-t border-zinc-200 pt-8">
          <a
            href="/cv.pdf"
            className="text-sm font-medium text-black underline underline-offset-4 transition hover:text-zinc-900"
          >
            Last ned CV som PDF
          </a>
        </div>
      </div>
    </div>
  );
}
