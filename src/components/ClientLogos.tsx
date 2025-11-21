import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";

// Placeholder client logos - replace with actual client logos
const clients = [
  { name: "Client 1", industry: "Commercial" },
  { name: "Client 2", industry: "Industrial" },
  { name: "Client 3", industry: "Residential" },
  { name: "Client 4", industry: "Healthcare" },
  { name: "Client 5", industry: "Education" },
  { name: "Client 6", industry: "Retail" },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted By <span className="text-primary">Leading</span> Companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud to serve businesses across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg p-6 flex items-center justify-center group animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-center">
                <Building2 className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors mx-auto mb-2" />
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {client.name}
                </p>
                <p className="text-xs text-muted-foreground">{client.industry}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;


