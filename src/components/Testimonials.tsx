import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Garden Route Hotel",
    rating: 5,
    text: "CH Fire Services installed our complete sprinkler system. Their professionalism and attention to detail was outstanding. The team completed the project on time and our property is now fully compliant with fire safety regulations.",
  },
  {
    name: "Michael van der Berg",
    business: "Mossel Bay Manufacturing",
    rating: 5,
    text: "We've been using CH Fire Services for our annual inspections for 5 years now. They're always punctual, thorough, and their service is exceptional. Highly recommend them for any fire protection needs.",
  },
  {
    name: "Linda Koopman",
    business: "Bayview Shopping Centre",
    rating: 5,
    text: "When our fire alarm system needed urgent repairs, CH Fire Services responded immediately. They diagnosed the issue quickly and had everything working perfectly within hours. Excellent emergency service!",
  },
  {
    name: "David Pretorius",
    business: "Coastal Restaurants Group",
    rating: 5,
    text: "CH Fire Services maintains all fire equipment across our 6 restaurant locations. Their systematic approach and detailed reporting gives us complete peace of mind. Professional service every time.",
  },
  {
    name: "Jennifer Smith",
    business: "Healthcare Facility",
    rating: 5,
    text: "As a healthcare facility, fire safety is critical. CH Fire Services provides comprehensive inspections and maintenance that exceed all regulatory requirements. Their expertise is unmatched.",
  },
  {
    name: "Robert Williams",
    business: "Industrial Complex",
    rating: 5,
    text: "The team at CH Fire Services understands industrial fire protection needs. They've helped us maintain compliance across multiple buildings with consistent, reliable service.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've protected
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full">
                    <CardContent className="pt-8 pb-8">
                      <Quote className="w-10 h-10 text-primary/20 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
