import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { articles, formatArticleDate } from "@/lib/articles";
import { OG_SIZE, getOgFonts, titleFontSize, ShareCardFooter } from "@/lib/ogImage";

export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  const fonts = await getOgFonts();
  const formattedDate = formatArticleDate(article.date);
  const eyebrow = [article.category, formattedDate].filter(Boolean).join(" · ").toUpperCase();
  const fontSize = titleFontSize(article.title);

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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 80, height: 4, backgroundColor: "#c9a84c", display: "flex" }} />
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontFamily: "Inter Tight",
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: 3,
                color: "rgba(245,240,232,0.6)",
              }}
            >
              {eyebrow}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Playfair Display",
              fontWeight: 900,
              fontSize,
              lineHeight: 1.15,
              color: "#f5f0e8",
            }}
          >
            {article.title}
          </div>
        </div>

        <ShareCardFooter />
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
