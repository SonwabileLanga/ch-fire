import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const InteractiveMap = () => {
  const address = "3 Keerom Street, Mossel Bay, South Africa";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Us on <span className="text-primary">Map</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit our office or get directions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg mb-6 overflow-hidden border-2 border-primary/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.6290556342997!2d22.113299899999998!3d-34.181400499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dd669c73363ff4d%3A0xb94a1a402f4e32cf!2sCH%20fire%20and%20safety%20services!5e0!3m2!1sen!2sza!4v1763708498381!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="CH Fire and Safety Services Location"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex-1 gap-2"
                  asChild
                >
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4" />
                    Open in Google Maps
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2"
                  asChild
                >
                  <a href={`https://maps.apple.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4" />
                    Open in Apple Maps
                  </a>
                </Button>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Office Hours</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="pt-2 text-primary font-semibold">
                    Emergency Service: Available 24/7
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;


