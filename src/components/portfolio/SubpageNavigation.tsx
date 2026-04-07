import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { contact } from "@/data/contact";

type NavItem = {
  label: string;
  to?: string;
  href?: string;
  active?: boolean;
};

type SubpageNavigationProps = {
  items: NavItem[];
};

const baseItemClass =
  "nav-link-pill border border-transparent bg-transparent";
const activeItemClass =
  "border-primary/20 bg-primary/10 text-primary hover:border-primary/20 hover:bg-primary/10 hover:text-primary";

const SubpageNavigation = ({ items }: SubpageNavigationProps) => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 nav-animate">
      <div className="mx-auto max-w-5xl px-4 pt-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 rounded-full border border-border/70 bg-background/95 px-3 py-2 shadow-soft">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-border/70 bg-card p-0.5">
              <img
                src="/logo-112.png"
                alt="Nicol Emanuele"
                width={48}
                height={48}
                loading="eager"
                decoding="async"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                Nicol Emanuele
              </p>
              <p className="section-kicker hidden text-[0.58rem] sm:block">
                nixkita
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {items.map((item) => {
              const className = item.active
                ? `${baseItemClass} ${activeItemClass}`
                : baseItemClass;

              if (item.to) {
                return (
                  <Link key={`${item.label}-${item.to}`} to={item.to} className={className}>
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className={className}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground transition-colors hover:border-primary/20 hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center rounded-full border border-border/70 bg-card/80 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/20 hover:text-primary"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubpageNavigation;
