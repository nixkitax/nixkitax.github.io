import { Link } from "react-router-dom";
import {
  ArrowUp,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/60 bg-transparent">
      <div className="mx-auto max-w-5xl px-4 pb-12 pt-8 sm:px-6">
        <div className="editorial-panel overflow-hidden rounded-[2rem] border-primary/10 bg-[linear-gradient(145deg,hsl(var(--card)),hsl(var(--background)))] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
            <div>
              <p className="section-kicker">Closing note</p>
              <h2 className="mt-3 max-w-2xl text-2xl leading-[1.08] text-foreground sm:text-3xl">
                Open to research conversations and well-scoped engineering
                work.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Built as a compact portfolio for research, technical notes, and
                selected systems work. If the problem needs careful reasoning
                and clear execution, email is still the fastest route.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild className="rounded-full px-5">
                  <a href={`mailto:${contact.email}`}>
                    Start a conversation
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-border/70 bg-background/70 px-5"
                >
                  <Link to="/blog">Browse notes</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-4">
                <p className="section-kicker">Based</p>
                <div className="mt-3 flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <p className="text-sm leading-6 text-foreground">
                    {contact.location}
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-4">
                <p className="section-kicker">Find me</p>
                <div className="mt-3 space-y-2.5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-center justify-between rounded-full border border-border/70 bg-background/80 px-4 py-2.5 text-sm text-foreground transition-colors hover:border-primary/20 hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Mail className="h-4 w-4" />
                      Email
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-full border border-border/70 bg-background/80 px-4 py-2.5 text-sm text-foreground transition-colors hover:border-primary/20 hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Github className="h-4 w-4" />
                      GitHub
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-full border border-border/70 bg-background/80 px-4 py-2.5 text-sm text-foreground transition-colors hover:border-primary/20 hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-border/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
              <span>© {currentYear} Nicol Emanuele</span>
              <span className="hidden text-muted-foreground/40 sm:inline">/</span>
              <Link to="/" className="transition-colors hover:text-foreground">
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="transition-colors hover:text-foreground"
              >
                Blog
              </Link>
            </div>

            <Button
              variant="outline"
              onClick={scrollToTop}
              className="w-full rounded-full border-border/70 bg-background/70 px-4 sm:w-auto"
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
