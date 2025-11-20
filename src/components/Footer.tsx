import { Flame } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">CH Fire Services</h3>
            </div>
            <p className="text-background/80">
              Professional fire protection solutions for your safety and peace of mind.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Sprinkler Systems</li>
              <li>Fire Alarms</li>
              <li>Fire Extinguishers</li>
              <li>Smoke Detection</li>
              <li>Access Control</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>3 Keerom Street</li>
              <li>Mossel Bay, South Africa</li>
              <li className="pt-2">Office: 044 693 3455</li>
              <li>chservicesfire@telkomsa.net</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {currentYear} CH Fire Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
