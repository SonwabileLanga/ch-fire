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
    <section id="services" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fire protection solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-8 pb-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-card border-2 border-primary/20 rounded-lg p-8 max-w-4xl">
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
