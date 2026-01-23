import { Link } from "react-router-dom";
import { posts } from "@/blog/post";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Learning = () => {
  const featured = posts.slice(0, 2);

  return (
    <section id="learning" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Always learning
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              I love learning new things
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Curiosity drives my work. I keep short notes about cryptography,
              security, and research experiments so ideas stay sharp and
              searchable.
            </p>
            <div className="mt-6">
              <Button asChild variant="outline">
                <Link to="/blog">Explore the blog</Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-2xl" />
              <img
                src="/images/learning-ghost.png"
                alt="Playful learning avatar"
                className="relative z-10 h-64 w-64 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              <Card className="group relative overflow-hidden border border-border/80 bg-card/80 transition hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[var(--shadow-medium)]">
                <CardHeader className="space-y-3">
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
                    {post.tags?.slice(0, 2).map((tag) => (
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
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;
