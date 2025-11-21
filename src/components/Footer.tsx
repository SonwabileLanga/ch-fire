import { Link } from "react-router-dom";
import { Flame } from "lucide-react";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">CH Fire Services</h3>
            </div>
            <p className="text-background/80 mb-4">
              Professional fire protection solutions for your safety and peace of mind.
            </p>
            <SocialMedia />
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/quote" className="hover:text-primary transition-colors">
                  Request Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link to="/services/sprinkler-systems" className="hover:text-primary transition-colors">
                  Sprinkler Systems
                </Link>
              </li>
              <li>
                <Link to="/services/fire-alarms" className="hover:text-primary transition-colors">
                  Fire Alarms
                </Link>
              </li>
              <li>
                <Link to="/services/fire-extinguishers" className="hover:text-primary transition-colors">
                  Fire Extinguishers
                </Link>
              </li>
              <li>
                <Link to="/services/smoke-detection" className="hover:text-primary transition-colors">
                  Smoke Detection
                </Link>
              </li>
              <li>
                <Link to="/services/access-control" className="hover:text-primary transition-colors">
                  Access Control
                </Link>
              </li>
              <li>
                <Link to="/services/hydrants-cameras" className="hover:text-primary transition-colors">
                  Hydrants & Cameras
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>3 Keerom Street</li>
              <li>Mossel Bay, South Africa</li>
              <li className="pt-2">Office: 044 693 3455</li>
              <li>
                <a href="mailto:chservicesfire@telkomsa.net" className="hover:text-primary transition-colors">
                  chservicesfire@telkomsa.net
                </a>
              </li>
              <li className="pt-2">
                <a href="tel:0619065523" className="hover:text-primary transition-colors">
                  Clayton: 061 906 5523
                </a>
              </li>
              <li>
                <a href="tel:0612341748" className="hover:text-primary transition-colors">
                  Dominique: 061 234 1748
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-background/60">
            <p>&copy; {currentYear} CH Fire Services. All rights reserved.</p>
            <div className="flex gap-4 text-sm">
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
