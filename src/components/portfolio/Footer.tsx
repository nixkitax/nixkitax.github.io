import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { contact } from "@/data/contact";
import { experiences } from "@/data/experience";
import { education, certifications } from "@/data/about";
import { projects } from "@/data/projects";
import { posts } from "@/blog/post";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_auto] md:items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary/20">
                <img
                  src="/profile.png"
                  alt="Nicol Emanuele"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">
                  Nicol Emanuele
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Cybersecurity Research
                </span>
              </div>
            </div>
            <p className="max-w-md text-center text-muted-foreground md:text-left">
              Cybersecurity researcher and developer passionate about
              cryptography, vector databases, and advancing digital security
              through research and innovation.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-start">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Explore
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-start">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    About
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Education</DialogTitle>
                    <DialogDescription>
                      Education path and current certifications.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-4 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-4">
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
                                edu.type === "Master's"
                                  ? "default"
                                  : "secondary"
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
                    </div>

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

              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    Projects
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Project zoom</DialogTitle>
                    <DialogDescription>
                      Focused builds and security experiments.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-4 space-y-4">
                    {projects.map((project) => (
                      <div
                        key={project.title}
                        className="rounded-2xl border border-border/70 bg-card/80 p-5 shadow-soft"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="text-lg font-semibold">
                              {project.title}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {project.status}
                            </div>
                          </div>
                          <Button asChild variant="outline" size="sm">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View code
                            </a>
                          </Button>
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    Experience
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Experience zoom</DialogTitle>
                    <DialogDescription>
                      Selected roles, focus areas, and core skills.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="relative mt-4 rounded-2xl border bg-gradient-light p-6">
                    <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary/70 via-primary/20 to-transparent" />
                    <div className="space-y-6 pl-8">
                      {experiences.map((exp, index) => (
                        <div
                          key={exp.title}
                          className="exp-zoom-card relative rounded-2xl border border-border/70 bg-card/80 p-5 shadow-soft"
                        >
                          <div className="absolute -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-background text-xs font-semibold text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-2">
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
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Highlight skills
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(
                        new Set(experiences.flatMap((exp) => exp.skills)),
                      )
                        .slice(0, 6)
                        .map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    Learning
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Learning zoom</DialogTitle>
                    <DialogDescription>
                      Recent notes and research learning highlights.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-4 space-y-4">
                    {posts.slice(0, 4).map((post) => (
                      <div
                        key={post.slug + post.title}
                        className="rounded-2xl border border-border/70 bg-card/80 p-4"
                      >
                        <div className="text-sm text-muted-foreground">
                          {post.date}
                        </div>
                        <div className="mt-1 text-lg font-semibold">
                          {post.title}
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {post.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge
                              key={`${post.slug}-${tag}`}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex justify-end">
                    <Button asChild size="sm">
                      <Link to="/blog">View all posts</Link>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm text-foreground/80 transition-colors hover:text-primary">
                    Contact
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Contact</DialogTitle>
                    <DialogDescription>
                      Let&apos;s connect for research or consulting.
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
          </div>

          <div className="flex items-center justify-center gap-3 md:justify-end">
            <a
              href="https://github.com/nixkitax"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/nicol-emanuele"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="mailto:nicol.eeemanuele@icloud.com"
              aria-label="Email"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full hover:shadow-soft transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nicol Emanuele. Professional portfolio and CV.
          </p>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Built with care in cybersecurity
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
