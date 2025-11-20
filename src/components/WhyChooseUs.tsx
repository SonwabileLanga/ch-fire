import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, BadgeCheck, Wrench, Phone, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Certified & Compliant",
    description: "SAQCC FIRE registered, SABBS approved, and SAMSA certified. All work meets South African National Standards (SANS) requirements.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "Round-the-clock emergency services for critical fire protection system failures. We're always ready to respond when you need us most.",
  },
  {
    icon: BadgeCheck,
    title: "15+ Years Experience",
    description: "Over a decade of expertise in fire protection systems across residential, commercial, and industrial properties in the Garden Route.",
  },
  {
    icon: Wrench,
    title: "Comprehensive Services",
    description: "From initial consultation and installation to regular maintenance and emergency repairs - we handle all your fire protection needs.",
  },
  {
    icon: Phone,
    title: "Personalized Service",
    description: "Direct access to our experienced team. Speak with Clayton or Dominique for personalized attention to your fire safety requirements.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We use only premium, approved equipment and provide detailed inspection reports. Your safety is our top priority.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">CH Fire Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for comprehensive fire protection solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
