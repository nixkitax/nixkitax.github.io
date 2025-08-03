import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-light">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Nicol Emanuele
          </h1>
          <div className="text-xl md:text-2xl text-primary font-medium mb-4">
            Cybersecurity Researcher & Developer
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            M.S. Computer Science student passionate about cryptography, blockchain security, 
            and vector database research. Currently pursuing advanced studies across European universities.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-10 space-y-2 text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Stockholm, Sweden • Milan, Italy</span>
          </div>
          <div>+39 334 368 7232 • nicol.eeemanuele@icloud.com</div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="/NicolEmanueleCV.pdf">
            <Button variant="default" size="lg">
            <Download className="mr-2 w-5 h-5" />
            Download CV
          </Button>
          </a>
          <a href="https://github.com/nixkitax?tab=repositories">
            <Button variant="outline" size="lg">
            View Projects
          </Button>
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;