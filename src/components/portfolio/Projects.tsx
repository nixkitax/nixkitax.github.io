import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Cloud, Database, Building } from "lucide-react";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

const Projects = () => {
  const experienceIcons = [Database, Building];

  const projectIcons = [Cloud, Database, Building, Cloud];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-subtle bg-clip-text text-transparent">
            Experience & Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Work spanning constraint-based systems, cryptography, and
            data-intensive pipelines, with a focus on correctness, performance,
            and reliable engineering.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold text-primary">
              Professional Experience
            </h3>
            <span className="rounded-full border border-primary/20 bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.22em] text-primary shadow-soft">
              Selected roles
            </span>
          </div>

          <div className="relative overflow-hidden rounded-3xl border bg-gradient-light p-8 shadow-soft md:p-10">
            <div className="absolute -left-10 -top-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -right-8 top-10 h-44 w-44 rounded-full bg-accent/40 blur-3xl" />

            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
              <div className="space-y-8 pl-12">
                {experiences.map((exp, index) => {
                  const Icon = experienceIcons[index] ?? Building;
                  return (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <Card className="group relative cursor-pointer overflow-hidden border border-border/70 bg-card/80 p-8 transition hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[var(--shadow-medium)]">
                          <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />
                          <div className="absolute -left-12 top-8 flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-background shadow-soft">
                            <span className="text-xs font-semibold text-primary">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="flex items-start gap-6">
                            <div className="rounded-2xl border border-primary/20 bg-white/70 p-3 shadow-soft">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                <h4 className="text-xl font-semibold text-foreground">
                                  {exp.title}
                                </h4>
                                <Badge
                                  variant="outline"
                                  className="border-primary/30 text-primary"
                                >
                                  {exp.type}
                                </Badge>
                              </div>
                              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                                <span className="font-medium text-foreground/80">
                                  {exp.company}
                                </span>
                                <span className="text-primary/70">•</span>
                                <span>{exp.period}</span>
                              </div>
                              <p className="text-muted-foreground mb-5 leading-relaxed">
                                {exp.description}
                              </p>
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
                              <div className="mt-5">
                                <Button variant="ghost" className="gap-2">
                                  Zoom experience
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-primary">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => {
              const Icon = projectIcons[index] ?? Cloud;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-medium transition-all duration-200"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-foreground">
                          {project.title}
                        </h4>
                        <Badge
                          variant="outline"
                          className="border-primary/30 text-primary"
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
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
                      <div className="flex gap-3">
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
