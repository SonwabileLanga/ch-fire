import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ImageIcon, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

// Placeholder images - replace with actual images
const galleryImages = [
  {
    id: 1,
    title: "Sprinkler System Installation",
    category: "Installation",
    description: "Professional sprinkler system installation in commercial building",
  },
  {
    id: 2,
    title: "Fire Alarm System",
    category: "Installation",
    description: "State-of-the-art fire alarm system setup",
  },
  {
    id: 3,
    title: "Fire Extinguisher Service",
    category: "Maintenance",
    description: "Regular maintenance and inspection of fire extinguishers",
  },
  {
    id: 4,
    title: "Smoke Detection System",
    category: "Installation",
    description: "Advanced smoke detection system installation",
  },
  {
    id: 5,
    title: "Hydrant System",
    category: "Installation",
    description: "Fire hydrant system installation and testing",
  },
  {
    id: 6,
    title: "Access Control System",
    category: "Installation",
    description: "Integrated access control and security systems",
  },
];

const categories = ["All", "Installation", "Maintenance", "Inspection"];

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through our portfolio of completed projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <Card
                  className="group cursor-pointer border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0 relative">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                      <ImageIcon className="w-16 h-16 text-primary/50" />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-primary mb-2 block">
                        {image.category}
                      </span>
                      <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {image.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-lg mb-4">
                  <ImageIcon className="w-24 h-24 text-primary/50" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-primary mb-2 block">
                    {image.category}
                  </span>
                  <h3 className="font-bold text-2xl mb-2">{image.title}</h3>
                  <p className="text-muted-foreground">{image.description}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;


