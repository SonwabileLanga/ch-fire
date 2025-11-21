import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "SAQCC FIRE",
    description: "Certified Fire Protection Specialists",
  },
  {
    title: "SABBS Approved",
    description: "Quality Standards Compliance",
  },
  {
    title: "SAMSA Certified",
    description: "Maritime Safety Authority",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certified & <span className="text-primary">Trusted</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fully accredited and compliant with South African safety standards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
