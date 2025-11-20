import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Shield,
    number: "500+",
    label: "Properties Protected",
    description: "Across the Garden Route",
  },
  {
    icon: Users,
    number: "15+",
    label: "Years Experience",
    description: "Industry expertise",
  },
  {
    icon: Award,
    number: "100%",
    label: "Compliance Rate",
    description: "SANS & SABS approved",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Emergency Service",
    description: "Always available",
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-primary">Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence in fire protection services across the Garden Route
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="border-2 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
