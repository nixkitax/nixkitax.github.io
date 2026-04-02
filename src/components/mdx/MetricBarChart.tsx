type MetricBarChartItem = {
  label: string;
  value: number;
};

type MetricBarChartProps = {
  items: MetricBarChartItem[];
  title?: string;
  subtitle?: string;
  unit?: string;
  precision?: number;
};

const MetricBarChart = ({
  items,
  title,
  subtitle,
  unit = "",
  precision = 2,
}: MetricBarChartProps) => {
  const max = Math.max(...items.map((item) => item.value), 0);

  return (
    <div className="not-prose my-8 rounded-[1.5rem] border border-border/70 bg-card p-5 shadow-soft">
      {title ? <p className="section-kicker">{title}</p> : null}
      {subtitle ? (
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{subtitle}</p>
      ) : null}

      <div className="mt-5 space-y-4">
        {items.map((item) => {
          const width = max > 0 ? (item.value / max) * 100 : 0;

          return (
            <div key={item.label} className="space-y-2">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="font-medium text-foreground">{item.label}</span>
                <span className="font-mono text-muted-foreground">
                  {item.value.toFixed(precision)}
                  {unit}
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-muted/60">
                <div
                  className="h-full rounded-full bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))]"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MetricBarChart;
