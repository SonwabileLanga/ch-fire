import { Card, CardContent } from "@/components/ui/card";
import { Shield, Flame, Camera, Droplets, Radio, Lock } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Sprinkler Systems",
    description: "Installation, maintenance, and inspection of fire sprinkler systems"
  },
  {
    icon: Radio,
    title: "Fire Alarms",
    description: "Comprehensive fire alarm system installation and monitoring"
  },
  {
    icon: Flame,
    title: "Fire Extinguishers",
    description: "Supply, installation, and servicing of fire extinguishers"
  },
  {
    icon: Shield,
    title: "Smoke Detection",
    description: "Advanced smoke detection systems for early warning"
  },
  {
    icon: Camera,
    title: "Hydrants & Cameras",
    description: "Fire hydrant systems and security camera installation"
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Integrated access control and security systems"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fire protection solutions for your safety
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="inline-block bg-card border-2 border-primary/20 rounded-lg p-8 max-w-4xl hover:border-primary/40 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">Additional Services</h3>
            <p className="text-lg text-muted-foreground">
              Suppression Systems • Hose Binding • Hose Reels • Supply & Installation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
