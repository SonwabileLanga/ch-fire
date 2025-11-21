import { Button } from "@/components/ui/button";
import { Phone, Mail, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/fire-safety-hero.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75" />
      </div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground leading-tight animate-fade-in-left">
            <span className="text-primary">CH Fire</span>
            <br />
            <span className="text-accent">Services</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-foreground font-semibold animate-fade-in-left [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Professional Fire Protection Solutions
          </p>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl animate-fade-in-left [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            Expert installation, inspection & maintenance of sprinkler systems, fire alarms, 
            extinguishers & smoke detection systems in Mossel Bay, South Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-left [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <Button 
              size="lg" 
              className="text-lg h-14 px-8 hover:scale-105 transition-transform duration-300"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Book Service
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg h-14 px-8 border-2 hover:scale-105 transition-transform duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg h-14 px-8 hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link to="/quote">
                <Calculator className="mr-2 h-5 w-5" />
                Get Instant Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
