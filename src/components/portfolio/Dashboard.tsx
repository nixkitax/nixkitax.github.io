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
import { education, certifications } from "@/data/about";
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
    <main className="relative">
      <section className="mx-auto max-w-6xl px-6 pt-28">
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-light p-8 shadow-soft md:p-12">
          <div className="absolute -left-20 -top-24 h-48 w-48 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
          <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-accent/40 blur-3xl animate-float-slower" />

          <div className="relative grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary shadow-soft">
                <Sparkles className="h-3.5 w-3.5" />
                Curious by default
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
                Nicol Emanuele
              </h1>
              <p className="mt-3 text-lg text-muted-foreground md:text-xl">
                Research intern working on vector databases and similarity
                search at scale.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                I study efficient retrieval for high-dimensional embeddings,
                explore scalable ANN methods, and prototype systems that turn
                research into practical tooling.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="/NicolEmanueleCV.pdf" download>
                    Download CV
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:nicol.eeemanuele@icloud.com">
                    Let&apos;s collaborate
                  </a>
                </Button>
                <Button asChild variant="ghost" className="gap-2">
                  <Link to="/blog">
                    Read the notes
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
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

            <div className="flex flex-col gap-6">
              <Card className="relative overflow-hidden p-6">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative flex items-start gap-4">
                  <img
                    src="/profile.png"
                    alt="Nicol Emanuele"
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

      <section className="mx-auto mt-10 max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-12">
          <Card
            className="relative overflow-hidden md:col-span-5 p-8"
            id="about"
          >
            <div className="absolute -left-10 -top-14 h-36 w-36 rounded-full bg-primary/12 blur-3xl" />
            <div className="absolute -right-12 bottom-6 h-24 w-24 rounded-full bg-accent/35 blur-2xl" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  About
                </div>
                <h2 className="mt-4 text-2xl font-semibold">Where I learned</h2>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    Education zoom
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Education</DialogTitle>
                    <DialogDescription>
                      Education and certifications highlights.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    {education.map((edu) => (
                      <div
                        key={edu.degree}
                        className="rounded-2xl border border-border/70 bg-card/80 p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm font-semibold">
                            {edu.degree}
                          </div>
                          <Badge
                            variant={
                              edu.type === "Master's" ? "default" : "secondary"
                            }
                            className="text-xs"
                          >
                            {edu.type}
                          </Badge>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {edu.institution}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {edu.location} · {edu.year}
                        </div>
                      </div>
                    ))}
                    <div className="rounded-2xl border border-border/70 bg-gradient-light p-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        Certifications
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {certifications.map((cert) => (
                          <Badge
                            key={cert}
                            variant="outline"
                            className="text-xs"
                          >
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="mt-4 space-y-5 text-sm text-muted-foreground">
              {education.slice(0, 2).map((edu, index) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl border border-border/70 bg-white/70 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium text-foreground">
                        {edu.degree}
                      </div>
                      <div>
                        {edu.institution.split("(")[0].trim()} — {edu.year}
                      </div>
                    </div>
                    {index === 0 ? (
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/10">
                        Current
                      </Badge>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Vector search",
                "Algorithms",
                "Systems",
                "Research",
                "Writing",
              ].map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>

          <Card
            className="relative overflow-hidden md:col-span-7 p-8"
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
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-light p-8 shadow-soft md:p-12">
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-accent/35 blur-2xl" />
          <div className="relative">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Personal projects
                </div>
                <h2 className="mt-4 text-2xl font-semibold">
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
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="group relative overflow-hidden border border-border/70 bg-card/80 p-6 shadow-soft transition hover:border-primary/40 hover:shadow-medium"
                >
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />
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
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-12">
          <Card className="relative overflow-hidden md:col-span-7 p-8">
            <div className="absolute -left-8 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -right-10 -bottom-16 h-40 w-40 rounded-full bg-accent/35 blur-3xl" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Blog
                </div>
                <h2 className="mt-4 text-2xl font-semibold">Recent notes</h2>
              </div>
              <Button asChild variant="ghost" className="gap-2">
                <Link to="/blog">
                  All notes
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-6 grid gap-4">
              {featuredPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <div className="rounded-2xl border border-border/80 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:border-primary/60">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("it-IT", {
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
                    <div className="mt-1 text-xs text-muted-foreground">
                      {post.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>

          <Card
            className="relative overflow-hidden md:col-span-5 p-8"
            id="contact"
          >
            <div className="absolute -right-8 top-4 h-24 w-24 rounded-full bg-primary/12 blur-2xl" />
            <div className="absolute -left-12 -bottom-14 h-36 w-36 rounded-full bg-accent/35 blur-3xl" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Contact
                </div>
                <h2 className="mt-4 text-2xl font-semibold">
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
              Open to research collaborations, algorithmic system design, and
              security engineering consulting.
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
              <div className="h-36 w-36 -translate-x-2 overflow-hidden rounded-full">
                <img
                  src="/pose.png"
                  alt="Nicol Emanuele"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
