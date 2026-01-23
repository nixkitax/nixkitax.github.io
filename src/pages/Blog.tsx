import { posts } from "@/blog/post";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Blog() {
  return (
    <section className="relative z-10 mx-auto min-h-screen max-w-5xl px-6 py-16">
      <div className="mb-12 space-y-5">
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
        <h1 className="text-4xl font-bold md:text-5xl">Blog</h1>
        <p className="max-w-2xl text-muted-foreground">
          Research notes, cryptography experiments, and things I wish I had
          found earlier.
        </p>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`}>
            <Card className="group relative overflow-hidden border border-border/80 bg-card/80 transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[var(--shadow-medium)]">
              <CardHeader className="relative space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <Badge variant="outline" className="text-xs">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("it-IT", {
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
    </section>
  );
}
