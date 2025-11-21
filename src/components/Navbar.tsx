import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Flame, Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = (path: string, id?: string | null) => {
    setMobileMenuOpen(false);
    if (path === "/" && id) {
      setTimeout(() => scrollToSection(id), 100);
    }
  };

  const navLinks = [
    { label: "Home", path: "/", id: "hero" },
    { label: "About", path: "/about", id: null },
    { label: "Services", path: "/services", id: null },
    { label: "Quote", path: "/quote", id: null },
    { label: "Contact", path: "/contact", id: null },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick("/", "hero")}
          >
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Flame className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-bold text-xl leading-tight">
                <span className="text-primary">CH Fire</span>
                <br />
                <span className="text-sm text-foreground/80">Services</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={link.path}
                        onClick={() => handleNavClick(link.path, link.id)}
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          location.pathname === link.path && "bg-accent/50"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10">
                    More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                          onClick={() => scrollToSection("certifications")}
                        >
                          <div className="text-sm font-medium leading-none">
                            Certifications
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our industry certifications
                          </p>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                          onClick={() => scrollToSection("faq")}
                        >
                          <div className="text-sm font-medium leading-none">
                            FAQ
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Frequently asked questions
                          </p>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                          onClick={() => scrollToSection("booking")}
                        >
                          <div className="text-sm font-medium leading-none">
                            Book Service
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Schedule your service
                          </p>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}

          {/* Desktop CTA Buttons */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="gap-2"
                asChild
              >
                <a href="tel:0619065523">
                  <Phone className="w-4 h-4" />
                  <span className="hidden lg:inline">Call</span>
                </a>
              </Button>
              <Button
                size="sm"
                className="gap-2"
                asChild
              >
                <Link to="/quote">Book Service</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-8">
                    <Flame className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-bold text-xl">
                        <span className="text-primary">CH Fire</span>
                      </div>
                      <div className="text-sm text-muted-foreground">Services</div>
                    </div>
                  </div>

                  <nav className="flex-1 space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => handleNavClick(link.path, link.id)}
                        className="block w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      to="/"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => scrollToSection("certifications"), 100);
                      }}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
                    >
                      Certifications
                    </Link>
                    <Link
                      to="/"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => scrollToSection("faq"), 100);
                      }}
                      className="block w-full text-left px-4 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
                    >
                      FAQ
                    </Link>
                  </nav>

                  <div className="space-y-3 pt-6 border-t">
                    <Button
                      className="w-full gap-2"
                      asChild
                    >
                      <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                        <Phone className="w-4 h-4" />
                        Request Quote
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      asChild
                    >
                      <a href="tel:0619065523">
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      asChild
                    >
                      <a href="mailto:chservicesfire@telkomsa.net">
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

