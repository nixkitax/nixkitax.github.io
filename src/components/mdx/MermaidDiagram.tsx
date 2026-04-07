import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type MermaidDiagramProps = {
  chart: string;
  className?: string;
  compact?: boolean;
};

let mermaidInitialized = false;

const MermaidDiagram = ({
  chart,
  className,
  compact = false,
}: MermaidDiagramProps) => {
  const reactId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [svg, setSvg] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (shouldRender) return;

    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "320px 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [shouldRender]);

  useEffect(() => {
    if (!shouldRender) return;

    let cancelled = false;

    const render = async () => {
      try {
        const mermaid = (await import("mermaid")).default;

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: "loose",
            theme: "base",
            themeVariables: {
              background: "#fbf8f3",
              primaryColor: "#f3ede3",
              primaryTextColor: "#242730",
              primaryBorderColor: "#d7cec0",
              lineColor: "#4d5563",
              tertiaryColor: "#ffffff",
              clusterBkg: "#f7f2ea",
              clusterBorder: "#d7cec0",
              fontFamily: "Manrope, sans-serif",
            },
          });
          mermaidInitialized = true;
        }

        const id = `mermaid-${reactId.replace(/:/g, "")}`;
        const { svg: rendered } = await mermaid.render(id, chart);
        if (!cancelled) {
          setSvg(rendered);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Mermaid render failed");
        }
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [chart, reactId, shouldRender]);

  if (error) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "not-prose rounded-[1.5rem] border border-destructive/30 bg-destructive/5 p-5",
          compact ? "my-0" : "my-8",
          className,
        )}
      >
        <p className="section-kicker text-destructive">Mermaid error</p>
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm text-muted-foreground">
          {error}
        </pre>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "mermaid-diagram not-prose rounded-[1.5rem] border border-border/70 bg-card shadow-soft",
        compact
          ? "my-0 h-full overflow-hidden p-3 [&_svg]:block [&_svg]:h-full [&_svg]:w-full [&_svg]:max-w-none"
          : "my-8 p-4",
        className,
      )}
    >
      {svg ? (
        <div
          className={cn(compact && "h-full")}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <div className="text-sm text-muted-foreground">
          {shouldRender ? "Rendering diagram..." : "Diagram will load on scroll..."}
        </div>
      )}
    </div>
  );
};

export default MermaidDiagram;
