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

const components: Components = {
  p: ({ children }) => (
    <p className="text-[18px] leading-[1.7] text-[var(--color-body)] sm:text-[19px]">
      {children}
    </p>
  ),
  blockquote: PullQuote,
  h2: ({ children }) => (
    <h2 className="article-h2 font-serif text-2xl font-bold uppercase tracking-tight text-[var(--color-foreground)]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="article-h3 font-serif text-xl font-bold tracking-tight text-[var(--color-foreground)]">
      {children}
    </h3>
  ),
  ul: ({ children }) => (
    <ul className="list-disc space-y-2 pl-6 text-[18px] leading-[1.7] text-[var(--color-body)] sm:text-[19px]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal space-y-2 pl-6 text-[18px] leading-[1.7] text-[var(--color-body)] sm:text-[19px]">
      {children}
    </ol>
  ),
};

export default function ArticleBody({ content }: { content: string }) {
  return (
    <article id="article-body" className="mt-12 max-w-[40rem] space-y-6 sm:mt-14">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
}
