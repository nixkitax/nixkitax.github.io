import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "@/blog/post";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const contentRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>(
    []
  );
  const [readingMinutes, setReadingMinutes] = useState(0);
  const { toast } = useToast();

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Card>
          <CardHeader className="space-y-3">
            <h1 className="text-2xl font-semibold">Post not found</h1>
            <p className="text-muted-foreground">
              The post you’re looking for doesn’t exist or was removed.
            </p>
            <Link
              to="/blog"
              className="text-sm font-medium text-primary hover:underline"
            >
              Back to blog
            </Link>
          </CardHeader>
        </Card>
      </section>
    );
  }

  const Content = post.content;
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
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
    <section className="no-reveal relative z-10 mx-auto min-h-screen max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground back-link-animate">
        <Link to="/blog" className="hover:text-primary">
          ← Blog
        </Link>
        <span className="hidden text-muted-foreground/50 sm:inline">/</span>
        <span className="hidden truncate sm:inline">{post.title}</span>
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
                  <span className="text-muted-foreground">No headings</span>
                )}
              </div>
            </div>
          </div>
        </aside>

        <Card className="relative overflow-hidden border-0 bg-transparent shadow-none sm:border sm:bg-card sm:shadow-[var(--shadow-soft)]">
          <CardHeader className="relative space-y-4 bg-gradient-to-b from-card to-background p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground overflow-x-auto sm:overflow-visible">
              {post.tags?.length ? (
                <div className="flex flex-nowrap gap-2 whitespace-nowrap">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={post.date}>{dateLabel}</time>
              {readingMinutes ? (
                <span>• {readingMinutes} min read</span>
              ) : null}
            </div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              {post.title}
            </h1>
            {post.description ? (
              <p className="max-w-2xl text-muted-foreground">
                {post.description}
              </p>
            ) : null}
            {toc.length ? (
              <details className="sm:hidden">
                <summary className="cursor-pointer text-sm font-semibold text-primary">
                  On this page
                </summary>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block ${item.level === 3 ? "pl-3 text-xs" : ""}`}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              </details>
            ) : null}
          </CardHeader>
          <Separator />
          <CardContent
            ref={contentRef}
            className="relative prose prose-slate max-w-none p-4 pt-5 sm:p-8 sm:pt-8 prose-base sm:prose-lg prose-p:leading-7 prose-headings:font-semibold prose-headings:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-pre:border prose-pre:border-border prose-pre:bg-muted/70 prose-h2:border-b prose-h2:border-border/60 prose-h2:pb-2 prose-h2:mt-10 prose-h3:border-l-2 prose-h3:border-primary/40 prose-h3:pl-3"
          >
            <Content />
          </CardContent>
          <div className="px-4 pb-6 sm:px-8">
            <Separator className="mb-5" />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/blog"
                className="text-sm font-semibold text-primary hover:underline"
              >
                Back to blog
              </Link>
              <div className="flex items-center gap-4">
                {post.tags?.[0] ? (
                  <span className="text-xs text-muted-foreground">
                    Filed under {post.tags[0]}
                  </span>
                ) : null}
                <button
                  type="button"
                  className="text-xs font-semibold text-muted-foreground hover:text-primary"
                  onClick={async () => {
                    const url = window.location.href;
                    try {
                      await navigator.clipboard.writeText(url);
                      toast({
                        title: "Link copied",
                        description: "Share it anywhere.",
                      });
                    } catch {
                      toast({
                        title: "Copy failed",
                        description: "Please copy the URL from the address bar.",
                      });
                    }
                  }}
                >
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}
