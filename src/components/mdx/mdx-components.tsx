import {
  isValidElement,
  type AnchorHTMLAttributes,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import Callout from "./Callout";
import MermaidDiagram from "./MermaidDiagram";
import MetricBarChart from "./MetricBarChart";

const extractText = (node: ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");

  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode; "data-line"?: string };
    const text = extractText(props.children);
    return props["data-line"] !== undefined ? `${text}\n` : text;
  }

  return "";
};

const extractMermaidCode = (node: ReactNode): string | null => {
  if (Array.isArray(node)) {
    for (const child of node) {
      const found = extractMermaidCode(child);
      if (found) return found;
    }
    return null;
  }

  if (!isValidElement(node)) return null;

  const props = node.props as {
    children?: ReactNode;
    className?: string;
    "data-language"?: string;
  };

  const className = props.className ?? "";
  const language = props["data-language"];

  if (
    typeof className === "string" &&
    className.includes("language-mermaid")
  ) {
    return extractText(props.children).trim();
  }

  if (language === "mermaid") {
    return extractText(props.children).trim();
  }

  return extractMermaidCode(props.children);
};

const InlineCode = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"code">) => {
  if (className) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  }

  return (
    <code
      className="rounded-md border border-border/70 bg-background/90 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
      {...props}
    >
      {children}
    </code>
  );
};

const Anchor = ({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isExternal = Boolean(href?.startsWith("http"));

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
};

const Figure = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"figure">) => {
  const mermaidCode = extractMermaidCode(children);

  if (mermaidCode) {
    return <MermaidDiagram chart={mermaidCode} />;
  }

  return <figure {...props}>{children}</figure>;
};

const Pre = ({
  children,
  ...props
}: ComponentPropsWithoutRef<"pre">) => {
  const mermaidCode = extractMermaidCode(children);

  if (mermaidCode) {
    return <MermaidDiagram chart={mermaidCode} />;
  }

  return <pre {...props}>{children}</pre>;
};

export const mdxComponents = {
  a: Anchor,
  code: InlineCode,
  figure: Figure,
  mermaid: MermaidDiagram,
  pre: Pre,
  Callout,
  MetricBarChart,
};
