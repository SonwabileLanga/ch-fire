import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Clayton",
    role: "Lead Fire Safety Specialist",
    phone: "061 906 5523",
    email: "clayton@chfireservices.co.za",
    description: "Over 15 years of experience in fire protection systems",
    image: null,
  },
  {
    name: "Dominique",
    role: "Fire Safety Consultant",
    phone: "061 234 1748",
    email: "dominique@chfireservices.co.za",
    description: "Expert in fire alarm systems and inspections",
    image: null,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals dedicated to your safety
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t">
                  <Button
                    variant="outline"
                    className="w-full gap-2 justify-start"
                    asChild
                  >
                    <a href={`tel:${member.phone.replace(/\s/g, "")}`}>
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2 justify-start"
                    asChild
                  >
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;


