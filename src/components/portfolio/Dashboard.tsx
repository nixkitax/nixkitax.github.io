import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { posts } from "@/blog/post";
import { contact } from "@/data/contact";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import {
  ArrowUpRight,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
  Shield,
  Sparkles,
} from "lucide-react";

const Dashboard = () => {
  const featuredPosts = posts.slice(0, 3);

  const focusAreas = [
    { label: "Vector databases", icon: Database },
    { label: "Similarity search", icon: Shield },
    { label: "Security research", icon: Microscope },
  ];

  const quickStats = [
    { label: "Current focus", value: "Scalable ANN research" },
    { label: "Notes published", value: `${posts.length}+` },
    { label: "Based in", value: "Stockholm, Sweden" },
  ];

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 -left-28 h-72 w-72 rounded-[40%] bg-accent/30 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-6 right-0 h-96 w-96 rounded-[45%] bg-primary/12 blur-[120px]" />
      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 sm:pt-28">
        <div className="sm:hidden">
          <div className="flex flex-col items-center text-center">
            <div className="h-40 w-40 overflow-hidden rounded-full border border-border/70 shadow-soft ring-1 ring-border/60">
              <img
                src="/profile-512.jpg"
                alt="Nicol Emanuele"
                width={192}
                height={192}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Curious by default
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight">
              Nicol Emanuele
            </h1>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              MSc Computer Science
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Research intern in vector databases &amp; similarity search.
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary/80">
              Vector databases + security
            </p>
            <div className="mt-6 flex w-full flex-col gap-3">
              <Button asChild className="w-full justify-center gap-2">
                <Link to="/blog">
                  Read the notes
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <a href="/NicolEmanueleCV.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden relative overflow-hidden rounded-3xl border bg-gradient-light p-6 shadow-soft sm:block sm:p-8 md:p-12">
          <div className="absolute -left-20 -top-24 h-48 w-48 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
          <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-accent/40 blur-3xl animate-float-slower" />

          <div className="relative grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary shadow-soft">
                <Sparkles className="h-3.5 w-3.5" />
                Curious by default
              </div>
              <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
                Nicol Emanuele
              </h1>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                MSc Computer Science
              </div>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg md:text-xl">
                Research intern working on vector databases and similarity
                search at scale.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  asChild
                  className="w-full justify-center gap-2 sm:w-auto sm:justify-start order-1 sm:order-3"
                >
                  <Link to="/blog">
                    Read the notes
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto order-2 sm:order-1"
                >
                  <a href="/NicolEmanueleCV.pdf" download>
                    Download CV
                  </a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full sm:w-auto order-3 sm:order-2"
                >
                  <a href="mailto:nicol.eeemanuele@icloud.com">
                    Let&apos;s collaborate
                  </a>
                </Button>
              </div>
              <div className="mt-8 hidden gap-3 sm:grid sm:grid-cols-3">
                {quickStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border/70 bg-card/70 p-4 text-sm shadow-soft"
                  >
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {stat.label}
                    </div>
                    <div className="mt-2 font-semibold text-foreground">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="hidden flex-col gap-6 md:flex">
              <Card className="relative overflow-hidden p-6">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative flex items-start gap-4">
                  <img
                    src="/profile-512.jpg"
                    alt="Nicol Emanuele"
                    width={96}
                    height={96}
                    decoding="async"
                    className="mt-1 h-24 w-24 rounded-full object-cover ring-2 ring-primary/40"
                  />
                  <div className="flex-1">
                    <div className="inline-flex items-center rounded-full border border-border/70 bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Current role
                    </div>
                    <div className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                      Research Intern
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      Provably.ai
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-3 py-1">
                    <MapPin className="h-4 w-4" />
                    <span>Stockholm / Milan / Remote</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Focus areas
                </div>
                <div className="mt-4 space-y-3">
                  {focusAreas.map((area) => (
                    <div
                      key={area.label}
                      className="flex items-center gap-3 rounded-xl border border-border/70 bg-white/70 px-4 py-3 text-sm"
                    >
                      <area.icon className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">
                        {area.label}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 no-reveal">
        <div className="space-y-12 sm:hidden">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Experience
            </div>
            <h2 className="text-2xl font-semibold">Where I&apos;ve worked</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              {experiences.slice(0, 1).map((exp) => (
                <div key={exp.title}>
                  <div className="font-medium text-foreground">
                    {exp.title}
                  </div>
                  <div>
                    {exp.company} · {exp.period}
                  </div>
                </div>
              ))}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full gap-2">
                  See all experience
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Experience</DialogTitle>
                  <DialogDescription>
                    Selected roles and core skills.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-4">
                  {experiences.map((exp) => (
                    <div key={exp.title} className="space-y-2">
                      <div className="text-sm font-semibold">{exp.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {exp.company} · {exp.period}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="grid gap-6 md:grid-cols-12">
          <Card
            className="relative overflow-hidden md:col-span-12 p-6 sm:p-8"
            id="projects"
          >
            <div className="absolute -right-6 -top-16 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute left-10 -bottom-10 h-28 w-28 rounded-full bg-accent/35 blur-2xl" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Experience
                </div>
                <h2 className="mt-4 text-2xl font-semibold">
                  Where I&apos;ve worked
                </h2>
              </div>
              <Dialog>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Experience zoom</DialogTitle>
                    <DialogDescription>
                      Selected roles and core skills.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    {experiences.map((exp) => (
                      <div
                        key={exp.title}
                        className="exp-zoom-card rounded-2xl border border-border/70 bg-card/80 p-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="text-lg font-semibold">
                              {exp.title}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {exp.company} · {exp.period}
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary"
                          >
                            {exp.type}
                          </Badge>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                          {exp.description}
                        </p>
                        <div className="mt-4">
                          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            Key highlights
                          </div>
                          <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                            {exp.highlights.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/50" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mt-4 space-y-5 text-sm text-muted-foreground">
              {experiences.slice(0, 2).map((exp, index) => (
                <Dialog key={exp.title}>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="exp-zoom-card w-full rounded-2xl border border-border/70 bg-white/70 p-4 text-left"
                      aria-label={`Open details for ${exp.title}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-medium text-foreground">
                            {exp.title}
                          </div>
                          <div>
                            {exp.company} — {exp.period}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-primary/60">
                          {index === 0 ? (
                            <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                              Current
                            </Badge>
                          ) : null}
                          <ArrowUpRight
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.skills.slice(0, 4).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{exp.title}</DialogTitle>
                      <DialogDescription>
                        {exp.company} · {exp.period}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Key highlights
                        </div>
                        <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                          {exp.highlights.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/50" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="sm:hidden space-y-4 border-t border-border/60 pt-10">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Personal projects
          </div>
          <h2 className="text-2xl font-semibold">
            Things I build outside of work
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            {projects.slice(0, 2).map((project) => (
              <div key={project.title} className="space-y-2">
                <div className="font-medium text-foreground">
                  {project.title}
                </div>
                <p>{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  <Github className="h-4 w-4" />
                  View code
                </a>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" className="w-full gap-2">
            <a href="https://github.com/nixkitax" target="_blank" rel="noreferrer">
              All projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="hidden sm:block">
          <div className="relative overflow-hidden rounded-3xl border bg-gradient-light p-6 shadow-soft sm:p-8 md:p-12">
            <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-accent/35 blur-2xl" />
            <div className="relative">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Personal projects
                  </div>
                  <h2 className="mt-4 text-xl font-semibold sm:text-2xl">
                    Things I build outside of work
                  </h2>
                </div>
                <Button asChild variant="ghost" className="gap-2">
                  <a
                    href="https://github.com/nixkitax"
                    target="_blank"
                    rel="noreferrer"
                  >
                    All projects
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {projects.slice(0, 2).map((project) => (
                  <Card
                    key={project.title}
                    className="group relative overflow-hidden border border-border/70 bg-card/80 p-6 shadow-soft transition hover:border-primary/40 hover:shadow-medium"
                  >
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="overflow-hidden rounded-2xl border border-border/60 bg-white/70">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        decoding="async"
                        className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="text-lg font-semibold text-foreground">
                        {project.title}
                      </div>
                      <Badge
                        variant="outline"
                        className="border-primary/30 text-primary"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-5">
                      <Button asChild variant="ghost" size="sm" className="gap-2">
                        <a href={project.github} target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" />
                          View code
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 pb-20 sm:px-6">
        <div className="space-y-12 sm:hidden border-t border-border/60 pt-10">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Blog
            </div>
            <h2 className="text-2xl font-semibold">Recent notes</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              {featuredPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <div className="font-medium text-foreground">
                    {post.title}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </Link>
              ))}
            </div>
            <Button asChild variant="outline" className="w-full gap-2">
              <Link to="/blog">
                All notes
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </div>
            <h2 className="text-2xl font-semibold">Let&apos;s connect</h2>
            <p className="text-sm text-muted-foreground">
              Open to research collaborations and system design work.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/nicol-emanuele
              </a>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="grid gap-6 md:grid-cols-12">
          <Card className="relative overflow-hidden md:col-span-7 p-6 sm:p-8">
            <div className="absolute -left-8 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -right-10 -bottom-16 h-40 w-40 rounded-full bg-accent/35 blur-3xl" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Blog
                </div>
                <h2 className="mt-4 text-xl font-semibold sm:text-2xl">
                  Recent notes
                </h2>
              </div>
              <Button asChild variant="ghost" className="gap-2">
                <Link to="/blog">
                  All notes
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-6 grid gap-4">
              {featuredPosts.map((post, index) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <div className="rounded-2xl border border-border/80 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:border-primary/60">
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://placehold.co/120x120/png?text=Note+${index + 1}`}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        decoding="async"
                        className="h-14 w-14 rounded-xl object-cover sm:h-16 sm:w-16"
                      />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                      </time>
                      <span>•</span>
                      <span>{post.tags?.[0] || "Research"}</span>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-foreground">
                      {post.title}
                    </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>

          <Card
            className="relative overflow-hidden md:col-span-5 p-6 sm:p-8"
            id="contact"
          >
            <div className="absolute -right-8 top-4 h-24 w-24 rounded-full bg-primary/12 blur-2xl" />
            <div className="absolute -left-12 -bottom-14 h-36 w-36 rounded-full bg-accent/35 blur-3xl" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Contact
                </div>
                <h2 className="mt-4 text-xl font-semibold sm:text-2xl">
                  Let&apos;s connect
                </h2>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    Contact zoom
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Contact</DialogTitle>
                    <DialogDescription>
                      Reach out for research or consulting.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-2 hover:text-primary"
                    >
                      <Mail className="h-4 w-4" />
                      {contact.email}
                    </a>
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                      github.com/nixkitax
                    </a>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 hover:text-primary"
                    >
                      <Linkedin className="h-4 w-4" />
                      linkedin.com/in/nicol-emanuele
                    </a>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Available for 2026 projects
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Remote-friendly
                    </Badge>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Open to research collaborations and system design work.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Github className="h-4 w-4" />
                github.com/nixkitax
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
                linkedin.com/in/nicol-emanuele
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                Available for 2026 projects
              </Badge>
              <Badge variant="outline" className="text-xs">
                Remote-friendly
              </Badge>
            </div>
            <div className="mt-8 flex justify-center">
              <div className="h-28 w-28 -translate-x-1 overflow-hidden rounded-full sm:h-36 sm:w-36 sm:-translate-x-2">
                <img
                  src="/pose-288.png"
                  alt="Nicol Emanuele"
                  width={144}
                  height={144}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
