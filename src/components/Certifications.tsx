import { Badge } from "@/components/ui/badge";
import { Shield, Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certified & <span className="text-primary">Trusted</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Accredited professionals ensuring the highest standards of fire safety
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">SAQCC FIRE</h3>
              <p className="text-muted-foreground">Certified Fire Protection</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">SABBS Approved</h3>
              <p className="text-muted-foreground">Quality Standards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">SAMSA</h3>
              <p className="text-muted-foreground">Maritime Safety Authority</p>
            </div>
          </div>
          
          <div className="bg-muted/30 rounded-lg p-8 border-2">
            <h3 className="text-2xl font-bold mb-6 text-center">Why Choose CH Fire Services?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Expert Installation</h4>
                  <p className="text-sm text-muted-foreground">Professional installation by certified technicians</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Regular Maintenance</h4>
                  <p className="text-sm text-muted-foreground">Scheduled inspections and preventive maintenance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Emergency response and support services</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Compliance Assured</h4>
                  <p className="text-sm text-muted-foreground">Meeting all safety regulations and standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
