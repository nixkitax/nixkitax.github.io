import { Info, Lightbulb, TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";

type CalloutType = "note" | "tip" | "warning";

type CalloutProps = {
  children: ReactNode;
  title?: string;
  type?: CalloutType;
};

const calloutStyles: Record<
  CalloutType,
  {
    icon: typeof Info;
    label: string;
    wrapper: string;
    iconWrap: string;
  }
> = {
  note: {
    icon: Info,
    label: "Note",
    wrapper:
      "border-primary/15 bg-primary/5 text-foreground",
    iconWrap:
      "border-primary/15 bg-primary/10 text-primary",
  },
  tip: {
    icon: Lightbulb,
    label: "Tip",
    wrapper:
      "border-accent/30 bg-accent/10 text-foreground",
    iconWrap:
      "border-accent/25 bg-background/70 text-foreground",
  },
  warning: {
    icon: TriangleAlert,
    label: "Warning",
    wrapper:
      "border-amber-500/30 bg-amber-500/10 text-foreground",
    iconWrap:
      "border-amber-500/20 bg-background/70 text-amber-700",
  },
};

const Callout = ({ children, title, type = "note" }: CalloutProps) => {
  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <div
      className={`mdx-callout my-8 rounded-[1.5rem] border p-5 shadow-soft ${style.wrapper}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${style.iconWrap}`}
        >
          <Icon className="h-4 w-4" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="section-kicker text-[0.62rem]">
            {title ?? style.label}
          </p>
          <div className="mt-3 text-sm leading-7 text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callout;
