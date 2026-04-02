import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { posts } from "@/blog/post";
import { certifications, education } from "@/data/about";
import { contact } from "@/data/contact";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import EditorialMascot from "./EditorialMascot";

const formatPostDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));

const Dashboard = () => {
  const featuredProjects = projects.slice(0, 3);
  const latestPost = posts[0];
  const currentRole = experiences[0];
  const primaryEducation = education[0];
  const coreSkills = Array.from(
    new Set(experiences.flatMap((experience) => experience.skills)),
  ).slice(0, 6);

  const profileDetails = [
    { label: "Based", value: contact.location, icon: MapPin },
    {
      label: "Recent role",
      value: `${currentRole.title} @ ${currentRole.company}`,
    },
    {
      label: "Education",
      value: primaryEducation.degree,
    },
  ];

  const directLinks = [
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "github.com/nixkitax",
      href: contact.github,
      icon: Github,
      external: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nicol-emanuele",
      href: contact.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: "CV",
      value: "Download PDF",
      href: "/NicolEmanueleCV.pdf",
      icon: ArrowUpRight,
      download: true,
    },
  ];

  return (
    <main id="top" className="relative overflow-hidden pb-24">
      <section className="no-reveal mx-auto max-w-7xl px-4 pt-28 sm:px-6 sm:pt-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="section-kicker">
                Nicol Emanuele / cybersecurity + research
              </p>
              <h1 className="max-w-3xl text-4xl leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
                Minimal systems, careful research, and security-minded
                engineering.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                I recently completed my M.S. in Computer Science while moving
                between Milan and Stockholm. My work sits between vector
                databases, cryptography, and practical security research, with a
                preference for clear interfaces and rigorous implementation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="rounded-full border-border/70 bg-background/70 px-3 py-1 text-[0.72rem] font-medium text-muted-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full px-5">
                <a href={`mailto:${contact.email}`}>
                  Let&apos;s work together
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-border/70 bg-background/70 px-5"
              >
                <a href="/NicolEmanueleCV.pdf" download>
                  Download CV
                </a>
              </Button>
              <Button asChild variant="ghost" className="rounded-full px-4">
                <Link to="/blog">Read notes</Link>
              </Button>
            </div>
          </div>

          <aside className="editorial-panel rounded-[2rem] p-5 sm:p-6">
            <div className="flex items-center gap-4">
              <div className="min-w-0">
                <p className="section-kicker">Profile</p>
                <h2 className="mt-2 text-2xl text-foreground">
                  Nicol Emanuele
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Computer Science graduate
                </p>
              </div>
            </div>

            <dl className="mt-6 space-y-4">
              {profileDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="border-t border-border/60 pt-4 first:border-t-0 first:pt-0"
                  >
                    <dt className="section-kicker flex items-center gap-2 text-[0.62rem]">
                      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground">
                      {item.value}
                    </dd>
                  </div>
                );
              })}
            </dl>

            <div className="mt-6 rounded-[1.5rem] border border-primary/10 bg-primary/5 p-4 text-sm leading-7 text-muted-foreground">
              <span className="font-semibold text-foreground">Right now:</span>{" "}
              building on recent work in approximate nearest-neighbor search,
              verifiable data systems, and practical cryptographic tooling.
            </div>
          </aside>
        </div>
      </section>

      <section
        id="about"
        className="defer-section mx-auto max-w-7xl scroll-mt-28 px-4 py-10 sm:px-6 sm:py-12"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-12">
          <div>
            {latestPost ? (
              <article className="editorial-panel rounded-[1.75rem] p-6 sm:p-7">
                <p className="section-kicker">From the blog</p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span>Latest article</span>
                  <span className="text-muted-foreground/40">/</span>
                  <time dateTime={latestPost.date}>
                    {formatPostDate(latestPost.date)}
                  </time>
                </div>
                <h3 className="mt-3 max-w-2xl text-[2.1rem] leading-[1.12] text-foreground">
                  {latestPost.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                  {latestPost.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {latestPost.tags.map((tag) => (
                    <Badge
                      key={`${latestPost.slug}-${tag}`}
                      variant="outline"
                      className="rounded-full border-border/70 text-[0.7rem]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button
                    asChild
                    variant="ghost"
                    className="h-auto px-0 text-sm text-primary hover:bg-transparent"
                  >
                    <Link to={`/blog/${latestPost.slug}`}>
                      Read the latest article
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="h-auto px-0 text-sm text-muted-foreground hover:bg-transparent hover:text-foreground"
                  >
                    <Link to="/blog">Browse all notes</Link>
                  </Button>
                </div>
              </article>
            ) : null}
          </div>
          <div className="space-y-5 lg:pt-3">
            <p className="section-kicker">About / Notes</p>
            <h2 className="max-w-[30rem] text-3xl leading-[1.08] text-foreground sm:text-4xl">
              A compact portfolio, plus a technical blog worth opening.
            </h2>
            <p className="max-w-[31rem] text-base leading-8 text-muted-foreground">
              Beyond the portfolio itself, I keep a small blog where I publish
              research notes, thesis walk-throughs, and implementation details
              around vector search, security, and verifiable systems.
            </p>
            <p className="max-w-[31rem] text-base leading-8 text-muted-foreground">
              It is the best place to understand how I work: not just the final
              project, but the reasoning, tradeoffs, failures, and technical
              decisions behind it.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild className="rounded-full px-5">
                <Link to="/blog">
                  Explore the blog
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {latestPost ? (
                <Button
                  asChild
                  variant="ghost"
                  className="rounded-full px-4 text-muted-foreground hover:text-foreground"
                >
                  <Link to={`/blog/${latestPost.slug}`}>
                    Start with the latest note
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="defer-section mx-auto max-w-5xl scroll-mt-28 px-4 py-10 sm:px-6 sm:py-12"
      >
        <div className="max-w-2xl">
          <p className="section-kicker">Projects</p>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
            Selected builds, focused on systems and security.
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {featuredProjects.map((project, index) => (
            <article
              key={project.title}
              className="editorial-panel rounded-[1.75rem] p-5"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="section-kicker">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <Badge
                    variant="outline"
                    className="whitespace-nowrap rounded-full border-border/70 bg-background/70 text-[0.68rem]"
                  >
                    {project.status}
                  </Badge>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground transition-colors hover:border-primary/20 hover:text-primary"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={`${project.title}-${tech}`}
                        variant="outline"
                        className="rounded-full border-border/70 bg-background/70 text-[0.68rem]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="journey"
        className="defer-section mx-auto max-w-5xl scroll-mt-28 px-4 py-10 sm:px-6 sm:py-12"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-10">
          <div>
            <p className="section-kicker">Journey</p>
            <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">
              Experience shaped by research, proofs, and implementation detail.
            </h2>

            <div className="mt-8 space-y-8">
              {experiences.map((experience) => (
                <article
                  key={`${experience.company}-${experience.title}`}
                  className="relative border-l border-border pl-6"
                >
                  <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="section-kicker text-[0.65rem]">
                      {experience.period}
                    </p>
                    <Badge
                      variant="outline"
                      className="rounded-full border-border/70 text-[0.68rem]"
                    >
                      {experience.type}
                    </Badge>
                  </div>
                  <h3 className="mt-3 text-2xl text-foreground">
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.company}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {experience.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {experience.highlights.slice(0, 2).map((highlight) => (
                      <p
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="editorial-panel rounded-[1.75rem] p-6">
              <p className="section-kicker">Education</p>
              <div className="mt-5 space-y-5">
                {education.map((item) => (
                  <div
                    key={item.degree}
                    className="border-t border-border/60 pt-5 first:border-t-0 first:pt-0"
                  >
                    <h3 className="text-lg text-foreground">{item.degree}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.institution}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {item.location} / {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="editorial-panel rounded-[1.75rem] p-6">
              <p className="section-kicker">Certifications</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {certifications.map((certification) => (
                  <Badge
                    key={certification}
                    variant="outline"
                    className="rounded-full border-border/70 bg-background/70 px-3 py-1 text-[0.7rem]"
                  >
                    {certification}
                  </Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="links"
        className="defer-section mx-auto max-w-5xl scroll-mt-28 px-4 py-10 sm:px-6 sm:py-12"
      >
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-10">
          <div className="space-y-4">
            <p className="section-kicker">Links</p>
            <h2 className="text-3xl text-foreground sm:text-4xl">
              Reach out if the work needs clarity, rigor, and a quiet design
              language.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground">
              Open to research conversations, technical collaborations, and
              well-scoped engineering work. The easiest way to reach me is by
              email.
            </p>
          </div>

          <div className="editorial-panel rounded-[1.75rem] p-6">
            {directLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  download={item.download}
                  className="group flex items-center justify-between gap-4 border-t border-border/60 py-4 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <div className="min-w-0">
                    <p className="section-kicker text-[0.62rem]">
                      {item.label}
                    </p>
                    <p className="mt-2 truncate text-sm text-foreground">
                      {item.value}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground transition-colors group-hover:border-primary/20 group-hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
