import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";

function PullQuote({ children }: { children?: ReactNode }) {
  const kids = Children.toArray(children).filter(
    (child) => !(typeof child === "string" && child.trim() === "")
  );

  if (kids.length === 1 && isValidElement(kids[0])) {
    const inner = kids[0] as ReactElement<{ children?: ReactNode }>;
    return <p className="pull-quote font-serif italic">{inner.props.children}</p>;
  }

  return <p className="pull-quote font-serif italic">{children}</p>;
}

const NON_PARAGRAPH_BLOCK_START = /^(#{1,6}\s|>\s|[-*+]\s|\d+\.\s)/;

export default function ArticleBody({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);
  const lastBlockIsParagraph = !NON_PARAGRAPH_BLOCK_START.test(blocks[blocks.length - 1] ?? "");
  const totalBlocks = blocks.length;

  let blockIndex = 0;

  const components: Components = {
    p: ({ children }) => {
      const isFirst = blockIndex === 0;
      const isLast = lastBlockIsParagraph && blockIndex === totalBlocks - 1;
      blockIndex++;
      const classes = [
        "text-[18px] leading-[1.7] text-[var(--color-body)] sm:text-[19px]",
        isFirst ? "has-drop-cap" : "",
        isLast ? "has-end-mark" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return <p className={classes}>{children}</p>;
    },
    blockquote: (props) => {
      blockIndex++;
      return <PullQuote {...props} />;
    },
    h2: ({ children }) => {
      blockIndex++;
      return (
        <h2 className="article-h2 font-serif text-2xl font-bold uppercase tracking-tight text-[var(--color-foreground)]">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      blockIndex++;
      return (
        <h3 className="article-h3 font-serif text-xl font-bold tracking-tight text-[var(--color-foreground)]">
          {children}
        </h3>
      );
    },
    ul: ({ children }) => {
      blockIndex++;
      return (
        <ul className="list-disc space-y-2 pl-6 text-[18px] leading-[1.7] text-[var(--color-body)] sm:text-[19px]">
          {children}
        </ul>
      );
    },
    ol: ({ children }) => {
      blockIndex++;
      return (
        <ol className="list-decimal space-y-2 pl-6 text-[18px] leading-[1.7] text-[var(--color-body)] sm:text-[19px]">
          {children}
        </ol>
      );
    },
  };

  return (
    <article id="article-body" className="mt-12 max-w-[40rem] space-y-6 sm:mt-14">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
}
