import { posts } from "@/blog/post";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export default function Blog() {
  const [activeTag, setActiveTag] = useState<string>("All");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => post.tags ?? []);
    return ["All", ...Array.from(new Set(allTags)).sort()];
  }, []);

  const featured = useMemo(() => (activeTag === "All" ? posts[0] : null), [activeTag]);
  const filteredPosts = useMemo(() => {
    if (activeTag === "All") {
      return posts.slice(1);
    }
    return posts.filter((post) => post.tags?.includes(activeTag));
  }, [activeTag]);

  const lastUpdated = useMemo(() => {
    if (!posts.length) {
      return "—";
    }
    const dates = posts.map((post) => new Date(post.date).getTime());
    const latest = Math.max(...dates);
    return new Date(latest).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }, []);

  return (
    <section className="relative z-10 mx-auto min-h-screen max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 space-y-5 sm:mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="back-link-animate text-sm text-muted-foreground hover:text-primary"
          >
            ← Home
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Notes & Research
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Blog</h1>
          <p className="max-w-2xl text-muted-foreground">
          Research notes, cryptography experiments, and things I wish I had
          found earlier.
        </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>{posts.length} notes</span>
          <span>Last updated {lastUpdated}</span>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              activeTag === tag
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-border/70 text-muted-foreground hover:border-primary/40 hover:text-primary"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {featured ? (
        <Link to={`/blog/${featured.slug}`}>
          <Card className="group relative mb-8 overflow-hidden border border-border/80 bg-card/80 transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[var(--shadow-medium)]">
            <CardHeader className="relative space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <Badge variant="outline" className="text-xs">
                  Featured
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <time dateTime={featured.date}>
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </Badge>
                {featured.tags?.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-2xl transition group-hover:text-primary sm:text-3xl">
                {featured.title}
              </CardTitle>
              <CardDescription className="max-w-2xl text-sm leading-relaxed">
                {featured.description}
              </CardDescription>
              <div className="text-xs font-medium text-muted-foreground">
                Read more →
              </div>
            </CardHeader>
          </Card>
        </Link>
      ) : null}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <Card className="group relative overflow-hidden border border-border/80 bg-card/80 transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[var(--shadow-medium)]">
              <CardHeader className="relative space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline" className="text-xs">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </Badge>
                  {post.tags?.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="transition group-hover:text-primary">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {post.description}
                </CardDescription>
                <div className="text-xs font-medium text-muted-foreground">
                  Read more →
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      {!filteredPosts.length && activeTag !== "All" ? (
        <div className="mt-10 text-sm text-muted-foreground">
          No posts tagged with “{activeTag}”.
        </div>
      ) : null}
    </section>
  );
}
