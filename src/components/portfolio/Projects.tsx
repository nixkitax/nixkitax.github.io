import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Cloud, Database, Building } from "lucide-react";

const Projects = () => {
  const experiences = [
    {
      title: "Vector Database Research Assistant",
      company: "Provably.ai",
      period: "Feb 2025 - Present",
      type: "Research Internship",
      description: "Conducted research on vector databases for efficient storage and retrieval of high-dimensional embeddings. Implemented Locality-Sensitive Hashing (LSH) to optimize approximate nearest neighbor searches and explored scalable algorithms for real-time similarity search over billions of vectors.",
      icon: Database,
      skills: ["Vector Databases", "LSH", "Python", "Real-time Search", "High-dimensional Data"]
    },
    {
      title: "Cryptographic Application Developer", 
      company: "Run Times Machines",
      period: "Jun 2023 - Jan 2024",
      type: "Development Internship",
      description: "Designed and implemented a Zero-Knowledge proof system for Schnorr signature verification using zk-SNARKs and Circom. Optimized elliptic curve operations, automated testing pipelines, and researched blockchain privacy applications with comprehensive technical documentation.",
      icon: Building,
      skills: ["zk-SNARKs", "Circom", "Cryptography", "Blockchain", "Zero-Knowledge Proofs"]
    }
  ];

  const projects = [
    {
      title: "Cloud Honeypot & SIEM Attack Visualization Lab",
      description: "Comprehensive cloud-based security lab implementing honeypot systems and SIEM attack visualization. Features automated threat detection, log analytics, and geolocation-based attack mapping using Azure cloud infrastructure.",
      icon: Cloud,
      tech: ["Azure VM", "Azure Sentinel", "Log Analytics", "PowerShell", "Windows Event Logs", "KQL"],
      github: "github.com/nixkitax",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-subtle bg-clip-text text-transparent">
            Experience & Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience in cryptography, vector databases, and cybersecurity research 
            with focus on practical implementations and cutting-edge technologies.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-all duration-200">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-primary">Featured Projects</h3>
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-all duration-200">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-foreground">{project.title}</h4>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;