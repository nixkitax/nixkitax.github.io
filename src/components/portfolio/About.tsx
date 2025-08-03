import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Building, Calendar } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "M.S. Computer Science",
      institution: "Università degli Studi Milano-Bicocca",
      location: "Milan, Italy",
      year: "2025",
      type: "Master's"
    },
    {
      degree: "B.S. Computer Science", 
      institution: "Università degli Studi dell'Insubria",
      location: "Varese, Italy", 
      year: "2023",
      type: "Bachelor's"
    },
    {
      degree: "Erasmus Experience",
      institution: "Stockholm University",
      location: "Stockholm, Sweden",
      year: "2024", 
      type: "Exchange"
    }
  ];

  const certifications = [
    "CompTIA Security+ (Expected 12/25)",
    "Google Cybersecurity Professional Certificate"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-subtle bg-clip-text text-transparent">
            Education & Background
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Currently pursuing advanced studies in computer science with focus on cybersecurity, 
            cryptography, and vector database research across European universities.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={edu.type === "Master's" ? "default" : "secondary"} className="text-xs">
                    {edu.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{edu.year}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{edu.degree}</h4>
                <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                <p className="text-xs text-muted-foreground">{edu.location}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary flex items-center justify-center gap-2">
            <Award className="w-6 h-6" />
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="border-primary/30 text-primary px-4 py-2">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;