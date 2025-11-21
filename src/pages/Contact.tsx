import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressIndicator from "@/components/ProgressIndicator";
import Contact from "@/components/Contact";
import InteractiveMap from "@/components/InteractiveMap";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <ProgressIndicator />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Get in touch with our team. We're here to help with all your fire protection needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 pb-6 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Clayton</h3>
                <a href="tel:0619065523" className="text-primary hover:underline block">
                  061 906 5523
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 pb-6 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Dominique</h3>
                <a href="tel:0612341748" className="text-primary hover:underline block">
                  061 234 1748
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 pb-6 text-center">
                <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold mb-2">Office</h3>
                <a href="tel:0446933455" className="text-primary hover:underline block">
                  044 693 3455
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 pb-6 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:chservicesfire@telkomsa.net" className="text-primary hover:underline text-sm block">
                  chservicesfire@telkomsa.net
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      {/* Map Section */}
      <InteractiveMap />

      {/* Office Hours */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
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
                        <h3 className="font-bold text-xl mb-2">Office Hours</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                          <p>Saturday: 9:00 AM - 1:00 PM</p>
                          <p>Sunday: Closed</p>
                          <p className="pt-2 text-primary font-semibold">
                            Emergency Service: Available 24/7
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <MessageCircle className="w-6 h-6 text-primary" />
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <Button className="w-full justify-start gap-2" asChild>
                        <Link to="/quote">
                          Request Free Quote
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2" asChild>
                        <a href="tel:0619065523">
                          <Phone className="w-4 h-4" />
                          Call Clayton
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2" asChild>
                        <a href="mailto:chservicesfire@telkomsa.net">
                          <Mail className="w-4 h-4" />
                          Send Email
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

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;


