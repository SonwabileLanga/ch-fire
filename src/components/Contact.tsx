import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Clayton</h3>
                <a href="tel:0619065523" className="text-primary hover:underline">
                  061 906 5523
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Dominique</h3>
                <a href="tel:0612341748" className="text-primary hover:underline">
                  061 234 1748
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '300ms' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Office</h3>
                <a href="tel:0446933455" className="text-primary hover:underline">
                  044 693 3455
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '400ms' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:chservicesfire@telkomsa.net" className="text-primary hover:underline text-sm">
                  chservicesfire@telkomsa.net
                </a>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <CardContent className="pt-8 pb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                      <p className="text-muted-foreground">
                        3 Keerom Street<br />
                        Mossel Bay<br />
                        South Africa
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Service Area</h3>
                      <p className="text-muted-foreground">
                        Serving Mossel Bay and surrounding areas
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-2xl mb-4">Ready to Protect Your Property?</h3>
                  <p className="text-muted-foreground mb-6">
                    Contact us today for expert fire protection solutions. Our team is ready to assess your needs and provide a comprehensive quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300" asChild>
                      <a href="tel:0619065523">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 hover:scale-105 transition-transform duration-300" asChild>
                      <a href="mailto:chservicesfire@telkomsa.net">
                        <Mail className="mr-2 h-5 w-5" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
