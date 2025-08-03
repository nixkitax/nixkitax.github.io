import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "nicol.eeemanuele@icloud.com", href: "mailto:nicol.ecemanuele@icloud.com" },
    { icon: Github, label: "GitHub", value: "github.com/nixkitax", href: "https://github.com/nixkitax" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/nicol-emanuele", href: "https://linkedin.com/in/nicol-emanuele" },
    { icon: MapPin, label: "Location", value: "Stockholm, Sweden • Milan, Italy", href: null }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-subtle bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaboration opportunities, research projects, or discussing 
            cybersecurity and technology? Let's connect and explore potential synergies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-foreground hover:text-primary transition-colors font-medium"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Status */}
            <Card className="mt-8 p-6 hover:shadow-medium transition-all duration-200">
              <h4 className="font-semibold mb-4 text-primary">Current Status</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Research Collaboration</span>
                  <span className="text-green-600 font-medium">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Academic Projects</span>
                  <span className="text-green-600 font-medium">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Internship Opportunities</span>
                  <span className="text-blue-600 font-medium">Open to Discuss</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Full-time Opportunities</span>
                  <span className="text-green-600 font-medium">Available</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 hover:shadow-medium transition-all duration-200">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Collaboration Opportunity" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="I'd like to discuss..." 
                  className="min-h-[120px] resize-none"
                />
              </div>
              
              <Button type="submit" variant="default" size="lg" className="w-full">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;