import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/blog/post";
import Footer from "@/components/portfolio/Footer";
import SubpageNavigation from "@/components/portfolio/SubpageNavigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const formatDate = (value: string | number | Date) =>
  new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => post.tags ?? []);
    return ["All", ...Array.from(new Set(allTags)).sort()];
  }, []);

  const latestTimestamp = useMemo(() => {
    if (!posts.length) return null;

    return Math.max(...posts.map((post) => new Date(post.date).getTime()));
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeTag === "All") return posts;
    return posts.filter((post) => post.tags?.includes(activeTag));
  }, [activeTag]);

  const featuredPost = filteredPosts[0] ?? null;
  const archivePosts = filteredPosts.slice(1);

  return (
    <>
      <SubpageNavigation
        items={[
          { label: "Portfolio", to: "/" },
          { label: "Blog", to: "/blog", active: true },
          { label: "Archive", href: "#archive" },
        ]}
      />

      <section className="relative z-10 mx-auto min-h-screen max-w-5xl px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <div className="relative">
          <div className="section-kicker">Notes</div>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="section-kicker">Archive</p>
              <h1 className="mt-3 text-4xl leading-[1.04] text-foreground sm:text-5xl">
                Notes first, context after.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                Short research notes, implementation details, and technical
                writing about systems, search, and verification.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="rounded-full border border-border/70 bg-background/70 px-3 py-2">
                {String(posts.length).padStart(2, "0")} notes
              </span>
              <span className="rounded-full border border-border/70 bg-background/70 px-3 py-2">
                Updated {latestTimestamp ? formatDate(latestTimestamp) : "—"}
              </span>
            </div>
          </div>

          {featuredPost ? (
            <article
              id="top-note"
              className="editorial-panel mt-8 rounded-[2rem] p-6 sm:p-8"
            >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
              <div>
                <p className="section-kicker">
                  {activeTag === "All"
                    ? "Latest note"
                    : `Selected note / ${activeTag}`}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <time dateTime={featuredPost.date}>
                    {formatDate(featuredPost.date)}
                  </time>
                  <span className="text-muted-foreground/40">/</span>
                  <span>
                    {activeTag === "All" ? "featured entry" : "selected note"}
                  </span>
                </div>

                <h2 className="mt-4 max-w-3xl text-3xl leading-[1.08] text-foreground sm:text-4xl lg:text-[2.8rem]">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  {featuredPost.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredPost.tags?.map((tag) => (
                    <Badge
                      key={`${featuredPost.slug}-${tag}`}
                      variant="outline"
                      className="rounded-full border-border/70 bg-background/70 text-[0.68rem]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  className="mt-6 rounded-full px-5"
                >
                  <Link to={`/blog/${featuredPost.slug}`}>
                    Open note
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <aside className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5">
                <p className="section-kicker">At a glance</p>
                <dl className="mt-5 space-y-4">
                  <div className="border-t border-border/60 pt-4 first:border-t-0 first:pt-0">
                    <dt className="section-kicker text-[0.62rem]">Focus</dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground">
                      research notes with practical implementation detail
                    </dd>
                  </div>
                  <div className="border-t border-border/60 pt-4">
                    <dt className="section-kicker text-[0.62rem]">Filter</dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground">
                      {activeTag === "All" ? "all topics" : activeTag}
                    </dd>
                  </div>
                  <div className="border-t border-border/60 pt-4">
                    <dt className="section-kicker text-[0.62rem]">Archive</dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground">
                      {archivePosts.length
                        ? `${archivePosts.length} more note${archivePosts.length === 1 ? "" : "s"} below`
                        : "the rest of the archive will grow here"}
                    </dd>
                  </div>
                </dl>
              </aside>
            </div>
            </article>
          ) : (
            <div className="editorial-panel mt-8 rounded-[2rem] p-6">
              <p className="section-kicker">Empty state</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                No notes match the current filter.
              </p>
            </div>
          )}

          <div className="mt-8 border-t border-border/70 pt-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full border px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition ${
                    activeTag === tag
                      ? "border-primary/20 bg-primary text-primary-foreground"
                      : "border-border/70 bg-background/70 text-muted-foreground hover:border-primary/20 hover:text-primary"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div id="archive" className="mt-10 scroll-mt-28">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="section-kicker">More notes</p>
                <h2 className="mt-3 text-2xl text-foreground sm:text-3xl">
                  {archivePosts.length
                    ? "Continue browsing."
                    : "A small archive, for now."}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                {archivePosts.length} item{archivePosts.length === 1 ? "" : "s"}
              </p>
            </div>

            {archivePosts.length ? (
              <div className="mt-6 space-y-4">
                {archivePosts.map((post, index) => (
                  <article
                    key={post.slug}
                    className="editorial-panel rounded-[1.75rem] p-5"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center justify-between gap-4 sm:w-16 sm:flex-col sm:items-start">
                        <p className="section-kicker">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="text-sm text-muted-foreground">
                              <time dateTime={post.date}>
                                {formatDate(post.date)}
                              </time>
                            </div>
                            <h3 className="mt-2 text-2xl text-foreground">
                              {post.title}
                            </h3>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                              {post.description}
                            </p>
                          </div>

                          <Button
                            asChild
                            variant="ghost"
                            className="h-11 rounded-full border border-border/70 bg-background/70 px-4 hover:bg-background"
                          >
                            <Link to={`/blog/${post.slug}`}>
                              Read
                              <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags?.map((tag) => (
                            <Badge
                              key={`${post.slug}-${tag}`}
                              variant="outline"
                              className="rounded-full border-border/70 bg-background/70 text-[0.68rem]"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="editorial-panel mt-6 rounded-[1.75rem] p-6">
                <p className="section-kicker">Soon</p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                  The featured note now carries the first impression. As more
                  notes are added, they will stack here immediately underneath.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
