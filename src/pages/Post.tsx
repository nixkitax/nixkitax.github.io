import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "@/blog/post";
import { postContent } from "@/blog/post-content";
import { mdxComponents } from "@/components/mdx/mdx-components";
import Footer from "@/components/portfolio/Footer";
import SubpageNavigation from "@/components/portfolio/SubpageNavigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import "katex/dist/katex.min.css";

const tocLinkClassName = (level: number) => {
  if (level === 1) {
    return "text-[0.82rem] font-semibold leading-5 text-foreground";
  }

  if (level === 2) {
    return "pl-3 text-[0.76rem] leading-5 text-foreground/80";
  }

  return "pl-5 text-[0.7rem] leading-5 text-muted-foreground";
};

export default function Post() {
  const { slug } = useParams();
  const post = useMemo(() => posts.find((entry) => entry.slug === slug), [slug]);
  const contentRef = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>(
    []
  );
  const [readingMinutes, setReadingMinutes] = useState(0);
  const { toast } = useToast();
  const Content = post ? postContent[post.slug] : null;

  if (!post || !Content) {
    return (
      <>
        <SubpageNavigation
          items={[
            { label: "Portfolio", to: "/" },
            { label: "Blog", to: "/blog" },
            { label: "Article", href: "#post-top", active: true },
          ]}
        />
        <section className="mx-auto max-w-3xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
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
        <Footer />
      </>
    );
  }

  const dateLabel = useMemo(
    () =>
      new Date(post.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    [post.date],
  );

  useEffect(() => {
    if (!contentRef.current) return;

    const root = contentRef.current;
    const headings = Array.from(root.querySelectorAll("h1, h2, h3"));
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
        level:
          heading.tagName === "H1"
            ? 1
            : heading.tagName === "H2"
              ? 2
              : 3,
      };
    });

    const text = root.textContent || "";
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    setReadingMinutes(minutes);
    setToc(nextToc);
  }, [post?.slug]);

  return (
    <>
      <SubpageNavigation
        items={[
          { label: "Portfolio", to: "/" },
          { label: "Blog", to: "/blog" },
          { label: "Article", href: "#post-top", active: true },
        ]}
      />

      <section
        id="post-top"
        className="no-reveal relative z-10 mx-auto min-h-screen max-w-[84rem] px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32"
      >
        <div className="mb-6">
          <p className="section-kicker">Article</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span className="text-muted-foreground/50">/</span>
            <span className="truncate">{post.title}</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[190px_minmax(0,1fr)] xl:grid-cols-[210px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div
                id="article-outline"
                className="border-l border-border/70 pl-4"
              >
                <div className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Contents
                </div>
                <div className="mt-4 space-y-2.5">
                  {toc.length ? (
                    toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`toc-link block transition-colors hover:text-foreground ${tocLinkClassName(
                          item.level
                        )}`}
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
                {readingMinutes ? <span>• {readingMinutes} min read</span> : null}
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
                    Contents
                  </summary>
                  <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block transition-colors hover:text-foreground ${tocLinkClassName(
                          item.level
                        )}`}
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
              className="relative prose prose-sm sm:prose-base prose-slate max-w-none p-4 pt-5 sm:p-8 sm:pt-8 prose-p:leading-7 prose-headings:font-semibold prose-headings:text-foreground prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-h1:mt-0 prose-h1:mb-6 prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:border-b prose-h2:border-border/60 prose-h2:pb-2 prose-h2:mt-10 prose-h3:border-l-2 prose-h3:border-primary/40 prose-h3:pl-3 prose-img:mx-auto prose-img:block prose-img:h-auto prose-img:w-full prose-img:max-w-full prose-img:rounded-[1.5rem] prose-img:border prose-img:border-border/70 prose-img:bg-card prose-img:shadow-[var(--shadow-soft)]"
            >
              <Content components={mdxComponents} />
            </CardContent>
            <div className="px-4 pb-6 sm:px-8">
              <Separator className="mb-5" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    to="/blog"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    Back to blog
                  </Link>
                  <a
                    href="#post-top"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Back to top
                  </a>
                </div>
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
                          description:
                            "Please copy the URL from the address bar.",
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
      <Footer />
    </>
  );
}
