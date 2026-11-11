import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const FONTS_DIR = path.join(process.cwd(), "assets", "fonts");

let fontsPromise: ReturnType<typeof loadFonts> | null = null;

async function loadFonts() {
  const [playfairBlack, playfairItalic, interTightBold] = await Promise.all([
    readFile(path.join(FONTS_DIR, "PlayfairDisplay-Black.ttf")),
    readFile(path.join(FONTS_DIR, "PlayfairDisplay-Italic.ttf")),
    readFile(path.join(FONTS_DIR, "InterTight-Bold.ttf")),
  ]);
  return [
    { name: "Playfair Display", data: playfairBlack, weight: 900 as const, style: "normal" as const },
    { name: "Playfair Display", data: playfairItalic, weight: 600 as const, style: "italic" as const },
    { name: "Inter Tight", data: interTightBold, weight: 700 as const, style: "normal" as const },
  ];
}

export function getOgFonts() {
  if (!fontsPromise) fontsPromise = loadFonts();
  return fontsPromise;
}

// Rough character-budget heuristic so long titles scale down instead of
// overflowing or getting cut off. Tuned for a ~1056px usable width over up
// to 3 lines at Playfair Display Black.
export function titleFontSize(title: string): number {
  const len = title.length;
  if (len <= 28) return 76;
  if (len <= 46) return 64;
  if (len <= 70) return 54;
  if (len <= 95) return 46;
  return 38;
}

// Shared bottom row ("Jakob Hake-Steffensen" + "jeycup.com") used by both the
// default share image and the per-article one.
export function ShareCardFooter({ showName = true }: { showName?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
      }}
    >
      {showName ? (
        <div
          style={{
            display: "flex",
            fontFamily: "Playfair Display",
            fontWeight: 900,
            fontSize: 28,
            color: "#c9a84c",
          }}
        >
          Jakob Hake-Steffensen
        </div>
      ) : (
        <div style={{ display: "flex" }} />
      )}
      <div
        style={{
          display: "flex",
          fontFamily: "Inter Tight",
          fontWeight: 700,
          fontSize: 20,
          letterSpacing: 2,
          color: "rgba(245,240,232,0.5)",
        }}
      >
        JEYCUP.COM
      </div>
    </div>
  );
}

// The default share image template, reused for every route that doesn't have
// its own opengraph-image file (home, /artikler, /om-meg). Each of those
// routes must still re-export this via its own opengraph-image.tsx, because
// a segment that defines its own `openGraph` metadata (even without images)
// stops inheriting an ancestor's file-based image.
export async function renderDefaultShareImage() {
  const fonts = await getOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1c1c1e",
          padding: "72px",
        }}
      >
        <div style={{ width: 80, height: 4, backgroundColor: "#c9a84c", display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Playfair Display",
              fontWeight: 900,
              fontSize: 80,
              lineHeight: 1.1,
              color: "#f5f0e8",
            }}
          >
            Jakob Hake-Steffensen
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 34,
              lineHeight: 1.4,
              color: "rgba(245,240,232,0.75)",
            }}
          >
            Skarp på sammenhenger. Opptatt av det som faktisk skjer.
          </div>
        </div>

        <ShareCardFooter showName={false} />
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
