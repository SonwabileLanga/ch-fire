import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <ProgressIndicator />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">CH Fire Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Your trusted partner in fire protection for over 15 years, serving the Garden Route with excellence and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Story</span>
              </h2>
            </div>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                CH Fire Services was founded with a simple yet powerful mission: to protect lives and property through exceptional fire protection services. Based in Mossel Bay, South Africa, we have been serving the Garden Route region for over 15 years, building a reputation for reliability, expertise, and unwavering commitment to safety.
              </p>
              <p className="text-lg leading-relaxed">
                Our journey began when our founders recognized a critical need for professional, certified fire protection services in the region. What started as a small local business has grown into a trusted name, protecting hundreds of properties across residential, commercial, and industrial sectors.
              </p>
              <p className="text-lg leading-relaxed">
                Today, CH Fire Services stands as a fully certified and compliant fire protection company, registered with SAQCC FIRE, approved by SABBS, and certified by SAMSA. We take pride in our comprehensive approach to fire safety, offering everything from initial consultation to installation, maintenance, and emergency response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "Protecting lives and property is our top priority in every project we undertake.",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We maintain the highest standards of quality and professionalism in all our services.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Your satisfaction and peace of mind drive everything we do.",
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "You can count on us to be there when you need us, 24/7.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose <span className="text-primary">Us</span>
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "15+ Years of Experience",
                  description: "With over a decade and a half in the industry, we bring extensive knowledge and expertise to every project.",
                },
                {
                  title: "Fully Certified & Compliant",
                  description: "SAQCC FIRE registered, SABBS approved, and SAMSA certified. All work meets SANS requirements.",
                },
                {
                  title: "24/7 Emergency Service",
                  description: "Fire emergencies don't wait for business hours. We're available around the clock for critical situations.",
                },
                {
                  title: "Local Expertise",
                  description: "Based in Mossel Bay, we understand the unique needs of the Garden Route region.",
                },
                {
                  title: "Comprehensive Solutions",
                  description: "From consultation to installation, maintenance to emergency repairs - we handle it all.",
                },
                {
                  title: "Personalized Service",
                  description: "Direct access to our experienced team. We treat every client as a priority.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-primary">Service Area</span>
              </h2>
            </div>
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Garden Route Region</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      We proudly serve the entire Garden Route region, including:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground mb-6">
                      <li>• Mossel Bay</li>
                      <li>• George</li>
                      <li>• Knysna</li>
                      <li>• Oudtshoorn</li>
                      <li>• Plettenberg Bay</li>
                      <li>• Sedgefield</li>
                      <li>• Wilderness</li>
                      <li>• Surrounding Areas</li>
                    </ul>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Note:</strong> Contact us to confirm coverage for your specific location. We're always expanding our service area to better serve our community.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today for a free consultation and discover how we can protect your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="/quote">
                  Request Free Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/contact">
                  Contact Us
                </a>
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

export default About;


