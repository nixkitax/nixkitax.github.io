import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/data/contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/70 bg-transparent">
      <div className="mx-auto max-w-5xl px-4 pb-10 pt-6 sm:px-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="section-kicker">Closing note</p>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Built as a compact portfolio for research, engineering notes, and
              selected systems work.
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nicol Emanuele
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" className="rounded-full">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full">
              <a href={`mailto:${contact.email}`} aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full border-border/70 bg-background/70"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
