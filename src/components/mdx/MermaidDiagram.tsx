import { useEffect, useId, useState } from "react";

type MermaidDiagramProps = {
  chart: string;
};

let mermaidInitialized = false;

const MermaidDiagram = ({ chart }: MermaidDiagramProps) => {
  const reactId = useId();
  const [svg, setSvg] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
  }, [chart, reactId]);

  if (error) {
    return (
      <div className="not-prose my-8 rounded-[1.5rem] border border-destructive/30 bg-destructive/5 p-5">
        <p className="section-kicker text-destructive">Mermaid error</p>
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm text-muted-foreground">
          {error}
        </pre>
      </div>
    );
  }

  return (
    <div className="mermaid-diagram not-prose my-8 rounded-[1.5rem] border border-border/70 bg-card p-4 shadow-soft">
      {svg ? (
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="text-sm text-muted-foreground">Rendering diagram…</div>
      )}
    </div>
  );
};

export default MermaidDiagram;
