import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { posts } from "@/blog/post";
import Footer from "@/components/portfolio/Footer";
import SubpageNavigation from "@/components/portfolio/SubpageNavigation";
import { preloadPostPage } from "@/routes/post-route";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const formatDate = (value: string | number | Date) =>
  new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));

const ARCHIVE_POSTS_PER_PAGE = 6;

const cardLinkClassName =
  "group block cursor-pointer rounded-[inherit] outline-none transition active:scale-[0.995] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background";

const mobileCardHintClassName =
  "inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:hidden";

type PageToken = number | "start-ellipsis" | "end-ellipsis";

const buildPagination = (
  currentPage: number,
  totalPages: number,
): PageToken[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, "end-ellipsis", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [
      1,
      "start-ellipsis",
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "start-ellipsis",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "end-ellipsis",
    totalPages,
  ];
};

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTag, searchQuery]);

  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => post.tags ?? []);
    return ["All", ...Array.from(new Set(allTags)).sort()];
  }, []);

  const latestTimestamp = useMemo(() => {
    if (!posts.length) return null;

    return Math.max(...posts.map((post) => new Date(post.date).getTime()));
  }, []);

  const normalizedSearchQuery = useMemo(
    () => searchQuery.trim().toLowerCase(),
    [searchQuery],
  );

  const filteredPosts = useMemo(() => {
    const postsByTag =
      activeTag === "All"
        ? posts
        : posts.filter((post) => post.tags?.includes(activeTag));

    if (!normalizedSearchQuery) {
      return postsByTag;
    }

    return postsByTag.filter((post) =>
      [post.title, post.description, post.slug, ...(post.tags ?? [])]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearchQuery),
    );
  }, [activeTag, normalizedSearchQuery]);

  const featuredPost = filteredPosts[0] ?? null;
  const archivePosts = filteredPosts.slice(1);
  const hasSearchQuery = Boolean(normalizedSearchQuery);
  const totalArchivePages = Math.max(
    1,
    Math.ceil(archivePosts.length / ARCHIVE_POSTS_PER_PAGE),
  );
  const currentArchivePage = Math.min(currentPage, totalArchivePages);
  const archiveStartIndex = (currentArchivePage - 1) * ARCHIVE_POSTS_PER_PAGE;

  const paginatedArchivePosts = useMemo(
    () =>
      archivePosts.slice(
        archiveStartIndex,
        archiveStartIndex + ARCHIVE_POSTS_PER_PAGE,
      ),
    [archivePosts, archiveStartIndex],
  );

  const paginationItems = useMemo(
    () => buildPagination(currentArchivePage, totalArchivePages),
    [currentArchivePage, totalArchivePages],
  );

  const handlePageChange = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalArchivePages);
    setCurrentPage(nextPage);
    document
      .getElementById("archive")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

          <div
            className="blog-reveal mt-6 flex flex-wrap items-end justify-between gap-4"
            style={{ animationDelay: "40ms" }}
          >
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

          <div
            className="blog-reveal editorial-panel mt-8 rounded-[1.75rem] p-4 sm:p-5"
            style={{ animationDelay: "90ms" }}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="section-kicker">Search</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Search by title, description, slug, or tag to narrow the
                  archive quickly.
                </p>
              </div>

              <div className="w-full lg:max-w-md">
                <label htmlFor="blog-search" className="sr-only">
                  Search notes
                </label>
                <div className="blog-search-shell relative rounded-full">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="blog-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search notes, topics, or tags"
                    className="h-12 rounded-full border-border/70 bg-background/70 pl-11 pr-20"
                  />

                  {hasSearchQuery ? (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary/20 hover:text-primary"
                    >
                      Clear
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {featuredPost ? (
            <article
              className="blog-reveal blog-card-soft editorial-panel mt-8 rounded-[2rem]"
              style={{ animationDelay: "140ms" }}
            >
              <Link
                id="top-note"
                to={`/blog/${featuredPost.slug}`}
                onMouseEnter={preloadPostPage}
                onFocus={preloadPostPage}
                className={`${cardLinkClassName} p-6 sm:p-8`}
                aria-label={`Open note: ${featuredPost.title}`}
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,26rem)] lg:items-start">
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
                        {activeTag === "All"
                          ? "featured entry"
                          : "selected note"}
                      </span>
                    </div>

                    <h2 className="mt-4 max-w-3xl text-3xl leading-[1.08] text-foreground transition-colors group-hover:text-primary sm:text-4xl lg:text-[2.8rem]">
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

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <span className="hidden h-11 items-center rounded-full border border-border/70 bg-background/70 px-4 text-sm font-medium text-foreground transition-colors group-hover:border-primary/20 group-hover:text-primary sm:inline-flex">
                        Open note
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                      <span className={mobileCardHintClassName}>
                        Tap anywhere to open
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
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
                          {hasSearchQuery ? ` / "${searchQuery.trim()}"` : ""}
                        </dd>
                      </div>
                      <div className="border-t border-border/60 pt-4">
                        <dt className="section-kicker text-[0.62rem]">Results</dt>
                        <dd className="mt-2 text-sm leading-6 text-foreground">
                          {String(filteredPosts.length).padStart(2, "0")} matching
                          note{filteredPosts.length === 1 ? "" : "s"}
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
              </Link>
            </article>
          ) : (
            <div
              className="blog-reveal editorial-panel mt-8 rounded-[2rem] p-6"
              style={{ animationDelay: "140ms" }}
            >
              <p className="section-kicker">Empty state</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
                No notes match the current filter or search query.
              </p>
            </div>
          )}

          <div
            className="blog-reveal mt-8 border-t border-border/70 pt-6"
            style={{ animationDelay: "190ms" }}
          >
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`blog-chip-soft rounded-full border px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.16em] transition ${
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
            <div
              className="blog-reveal flex flex-wrap items-end justify-between gap-3"
              style={{ animationDelay: "220ms" }}
            >
              <div>
                <p className="section-kicker">More notes</p>
                <h2 className="mt-3 text-2xl text-foreground sm:text-3xl">
                  {archivePosts.length
                    ? "Continue browsing."
                    : "A small archive, for now."}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span className="rounded-full border border-border/70 bg-background/70 px-3 py-2">
                  {archivePosts.length
                    ? `Page ${currentArchivePage} of ${totalArchivePages}`
                    : "Page 0 of 0"}
                </span>
                <span className="rounded-full border border-border/70 bg-background/70 px-3 py-2">
                  {archivePosts.length
                    ? `${archiveStartIndex + 1}-${archiveStartIndex + paginatedArchivePosts.length} of ${archivePosts.length}`
                    : "0 items"}
                </span>
              </div>
            </div>

            {archivePosts.length ? (
              <div className="mt-6 space-y-4">
                {paginatedArchivePosts.map((post, index) => (
                  <article
                    key={`${post.slug}-${archiveStartIndex + index}`}
                    className="blog-reveal blog-card-soft editorial-panel rounded-[1.75rem]"
                    style={{ animationDelay: `${260 + index * 45}ms` }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      onMouseEnter={preloadPostPage}
                      onFocus={preloadPostPage}
                      className={`${cardLinkClassName} p-5`}
                      aria-label={`Open note: ${post.title}`}
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-center justify-between gap-4 sm:w-16 sm:flex-col sm:items-start">
                          <p className="section-kicker">
                            {String(archiveStartIndex + index + 1).padStart(
                              2,
                              "0",
                            )}
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
                              <h3 className="mt-2 text-2xl text-foreground transition-colors group-hover:text-primary">
                                {post.title}
                              </h3>
                              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                                {post.description}
                              </p>
                            </div>

                            <span className="hidden h-11 items-center rounded-full border border-border/70 bg-background/70 px-4 text-sm font-medium text-foreground transition-colors group-hover:border-primary/20 group-hover:text-primary sm:inline-flex">
                              Read
                              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </span>
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

                          <div className="mt-4 sm:hidden">
                            <span className={mobileCardHintClassName}>
                              Tap anywhere to open
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}

                {totalArchivePages > 1 ? (
                  <Pagination
                    className="blog-reveal pt-2"
                    style={{ animationDelay: "320ms" }}
                  >
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#archive"
                          aria-disabled={currentArchivePage === 1}
                          className={`blog-chip-soft rounded-full border border-border/70 bg-background/70 hover:bg-background ${
                            currentArchivePage === 1
                              ? "pointer-events-none opacity-40"
                              : ""
                          }`}
                          onClick={(event) => {
                            event.preventDefault();
                            handlePageChange(currentArchivePage - 1);
                          }}
                        />
                      </PaginationItem>

                      {paginationItems.map((item) => (
                        <PaginationItem key={String(item)}>
                          {typeof item === "number" ? (
                            <PaginationLink
                              href="#archive"
                              isActive={item === currentArchivePage}
                              className={`blog-chip-soft rounded-full border ${
                                item === currentArchivePage
                                  ? "border-primary/20 bg-primary text-primary-foreground shadow-soft hover:bg-primary"
                                  : "border-border/70 bg-background/70 hover:bg-background"
                              }`}
                              onClick={(event) => {
                                event.preventDefault();
                                handlePageChange(item);
                              }}
                            >
                              {item}
                            </PaginationLink>
                          ) : (
                            <PaginationEllipsis />
                          )}
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          href="#archive"
                          aria-disabled={currentArchivePage === totalArchivePages}
                          className={`blog-chip-soft rounded-full border border-border/70 bg-background/70 hover:bg-background ${
                            currentArchivePage === totalArchivePages
                              ? "pointer-events-none opacity-40"
                              : ""
                          }`}
                          onClick={(event) => {
                            event.preventDefault();
                            handlePageChange(currentArchivePage + 1);
                          }}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                ) : null}
              </div>
            ) : (
              <div
                className="blog-reveal editorial-panel mt-6 rounded-[1.75rem] p-6"
                style={{ animationDelay: "260ms" }}
              >
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
