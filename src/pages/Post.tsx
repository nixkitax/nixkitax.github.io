import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "@/blog/post";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const contentRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>(
    []
  );
  const [readingMinutes, setReadingMinutes] = useState(0);

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Card>
          <CardHeader className="space-y-3">
            <h1 className="text-2xl font-semibold">Post non trovato</h1>
            <p className="text-muted-foreground">
              Il post che cerchi non esiste o è stato rimosso.
            </p>
            <Link
              to="/blog"
              className="text-sm font-medium text-primary hover:underline"
            >
              Torna al blog
            </Link>
          </CardHeader>
        </Card>
      </section>
    );
  }

  const Content = post.content;
  const formattedDate = new Date(post.date).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const dateLabel = useMemo(() => formattedDate, [formattedDate]);

  useEffect(() => {
    if (!contentRef.current) return;

    const root = contentRef.current;
    const headings = Array.from(root.querySelectorAll("h2, h3"));
    const seen = new Map<string, number>();

    const slugify = (value: string) =>
      value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

    const nextToc = headings.map((heading) => {
      const text = heading.textContent?.trim() || "";
      const base = slugify(text) || "section";
      const count = seen.get(base) ?? 0;
      const id = count ? `${base}-${count + 1}` : base;
      seen.set(base, count + 1);
      if (!heading.id) heading.id = id;
      return {
        id: heading.id,
        text,
        level: heading.tagName === "H2" ? 2 : 3,
      };
    });

    const text = root.textContent || "";
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    setReadingMinutes(minutes);
    setToc(nextToc);
  }, [post?.slug]);

  return (
    <section className="no-reveal relative z-10 mx-auto min-h-screen max-w-6xl px-6 py-16">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground back-link-animate">
        <Link to="/blog" className="hover:text-primary">
          ← Blog
        </Link>
        <span className="text-muted-foreground/50">/</span>
        <span className="truncate">{post.title}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-6">
            <div className="rounded-lg border bg-card/80 p-4 shadow-[var(--shadow-soft)] backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Outline
              </div>
              <div className="mt-3 space-y-2 text-sm">
                {toc.length ? (
                  toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`toc-link block text-muted-foreground transition ${
                      item.level === 3 ? "pl-3 text-xs" : ""
                    }`}
                  >
                    {item.text}
                  </a>
                  ))
                ) : (
                  <span className="text-muted-foreground">Nessun titolo</span>
                )}
              </div>
            </div>
          </div>
        </aside>

        <Card className="relative overflow-hidden shadow-[var(--shadow-soft)]">
          <CardHeader className="relative space-y-4 bg-gradient-to-b from-card to-background">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {post.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="text-sm text-muted-foreground">
              <time dateTime={post.date}>{dateLabel}</time>
              {readingMinutes ? (
                <span className="ml-3">• {readingMinutes} min lettura</span>
              ) : null}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {post.title}
            </h1>
            {post.description ? (
              <p className="max-w-2xl text-muted-foreground">
                {post.description}
              </p>
            ) : null}
          </CardHeader>
          <Separator />
          <CardContent
            ref={contentRef}
            className="relative prose prose-slate max-w-none p-8 pt-8 prose-headings:font-semibold prose-headings:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-pre:border prose-pre:border-border prose-pre:bg-muted/70"
          >
            <Content />
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
