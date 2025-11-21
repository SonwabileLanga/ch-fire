import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Droplets, Radio, Flame, Shield, Camera, Lock, 
  Wrench, CheckCircle, Clock, AlertTriangle 
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Droplets,
    title: "Sprinkler Systems",
    description: "Complete installation, maintenance, and inspection of fire sprinkler systems for all property types.",
    features: [
      "Wet & Dry Sprinkler Systems",
      "Pre-Action Systems",
      "Deluge Systems",
      "Regular Inspections & Testing",
      "Emergency Repairs",
      "SANS 10252 Compliance",
    ],
    link: "/services/sprinkler-systems",
  },
  {
    icon: Radio,
    title: "Fire Alarms",
    description: "Comprehensive fire alarm system installation, monitoring, and maintenance services.",
    features: [
      "Conventional & Addressable Systems",
      "Smoke & Heat Detectors",
      "Manual Call Points",
      "Alarm Monitoring",
      "24/7 Emergency Response",
      "Annual Inspections",
    ],
    link: "/services/fire-alarms",
  },
  {
    icon: Flame,
    title: "Fire Extinguishers",
    description: "Supply, installation, and regular servicing of all types of fire extinguishers.",
    features: [
      "All Fire Classes (A, B, C, D, F)",
      "Supply & Installation",
      "Monthly Visual Inspections",
      "Annual Servicing",
      "Recharging & Refilling",
      "Compliance Certificates",
    ],
    link: "/services/fire-extinguishers",
  },
  {
    icon: Shield,
    title: "Smoke Detection",
    description: "Advanced smoke detection systems for early warning and property protection.",
    features: [
      "Ionization & Photoelectric Detectors",
      "Beam Detectors",
      "Aspirating Systems",
      "Interconnected Systems",
      "Battery Backup",
      "Regular Testing",
    ],
    link: "/services/smoke-detection",
  },
  {
    icon: Camera,
    title: "Hydrants & Cameras",
    description: "Fire hydrant systems and security camera installation for comprehensive protection.",
    features: [
      "Fire Hydrant Installation",
      "Hydrant Testing & Maintenance",
      "Security Camera Systems",
      "Integrated Monitoring",
      "Remote Access",
      "Maintenance Contracts",
    ],
    link: "/services/hydrants-cameras",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Integrated access control and security systems for enhanced safety.",
    features: [
      "Card & Biometric Access",
      "Door Entry Systems",
      "Visitor Management",
      "Integration with Fire Systems",
      "24/7 Monitoring",
      "System Maintenance",
    ],
    link: "/services/access-control",
  },
];

const additionalServices = [
  "Hose Reels & Hose Binding",
  "Emergency Lighting Systems",
  "Fire Doors & Seals",
  "Fire Risk Assessments",
  "Compliance Audits",
  "Training & Education",
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <ProgressIndicator />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Comprehensive fire protection solutions tailored to your needs. From installation to maintenance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Additional <span className="text-primary">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We also provide a range of complementary fire safety services
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="pt-6 pb-6 flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Process</span>
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  icon: Clock,
                  step: "1",
                  title: "Consultation",
                  description: "We start with a free consultation to understand your needs and assess your property.",
                },
                {
                  icon: Wrench,
                  step: "2",
                  title: "Quote & Planning",
                  description: "Receive a detailed quote and work with us to plan the perfect solution for your property.",
                },
                {
                  icon: CheckCircle,
                  step: "3",
                  title: "Installation",
                  description: "Our certified technicians install your fire protection system with minimal disruption.",
                },
                {
                  icon: Shield,
                  step: "4",
                  title: "Maintenance",
                  description: "Regular maintenance and inspections ensure your system remains compliant and operational.",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="pt-6 pb-6">
                      <div className="flex items-start gap-6">
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                              {item.step}
                            </span>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Quote?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free, no-obligation quote for your fire protection needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/quote">
                  Request Free Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;


