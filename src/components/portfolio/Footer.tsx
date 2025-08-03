import { Button } from "@/components/ui/button";
import { User, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              src="/logo.png"
              alt="Nicol Emanuele"
              className="w-full h-full object-cover"
            />
          </div>
              <span className="text-xl font-bold text-primary">
                Nicol Emanuele
              </span>
            </div>
            <p className="text-muted-foreground text-center md:text-left max-w-md">
              Cybersecurity researcher and developer passionate about cryptography, 
              vector databases, and advancing digital security through research and innovation.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/nixkitax">
              <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="w-5 h-5" />
            </Button>
            </a>
            <a href="linkedin.com/in/nicol-emanuele">
              <Button variant="ghost" size="icon" className="rounded-full">
              <Linkedin className="w-5 h-5" />
            </Button>
            </a>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          {/* Back to Top */}
          <Button 
            variant="outline" 
            size="icon" 
            onClick={scrollToTop}
            className="rounded-full hover:shadow-soft transition-all"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Nicol Emanuele. Professional portfolio and CV.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;