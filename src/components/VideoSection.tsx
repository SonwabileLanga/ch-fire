import { Card, CardContent } from "@/components/ui/card";
import { Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  // Placeholder for video - replace with actual video embed URL
  const videoUrl = "#"; // Add your YouTube or Vimeo video URL here

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See Us In <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how we protect your property with professional fire safety solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="text-center z-10">
                    <div className="bg-primary/90 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-10 h-10 text-primary-foreground ml-1" />
                    </div>
                    <p className="text-white font-semibold text-lg">Watch Our Video</p>
                    <p className="text-white/80 text-sm mt-2">
                      Learn about our fire protection services
                    </p>
                  </div>
                </div>
                {/* Placeholder - Replace with actual video embed */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Youtube className="w-32 h-32 text-primary/30" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 pb-6 text-center">
                <h3 className="font-bold text-lg mb-2">Installation Process</h3>
                <p className="text-sm text-muted-foreground">
                  See how we install fire protection systems
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 pb-6 text-center">
                <h3 className="font-bold text-lg mb-2">Maintenance Services</h3>
                <p className="text-sm text-muted-foreground">
                  Learn about our inspection procedures
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6 pb-6 text-center">
                <h3 className="font-bold text-lg mb-2">Emergency Response</h3>
                <p className="text-sm text-muted-foreground">
                  Our 24/7 emergency service in action
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;


