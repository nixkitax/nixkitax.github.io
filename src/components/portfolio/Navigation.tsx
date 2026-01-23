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
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-animate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <div className="flex items-center justify-between gap-4 rounded-full border border-border/70 bg-background/80 px-4 py-2 shadow-soft backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-border/70 ring-1 ring-primary/15">
              <img
                src="/logo.png"
                alt="Nicol Emanuele"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base font-semibold tracking-tight text-primary">
              Nicol Emanuele
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            <Link to="/blog" className="nav-link-pill">
              Blog
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <button className="nav-link-pill">About</button>
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
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-gradient-light p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Certifications
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {certifications.map((cert) => (
                        <Badge key={cert} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button asChild size="sm">
                        <a href="/NicolEmanueleCV.pdf" download>
                          Download CV
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="nav-link-pill">Projects</button>
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
                <button className="nav-link-pill">Experience</button>
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

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
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
                  <Button asChild variant="outline" size="sm">
                    <a href="/NicolEmanueleCV.pdf" download>
                      Download CV
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="nav-link-pill">Contact</button>
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
      </div>
    </nav>
  );
};

export default Navigation;
