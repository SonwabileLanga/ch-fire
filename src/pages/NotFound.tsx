import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-muted py-24">
        <Card className="max-w-2xl mx-4 border-2">
          <CardContent className="pt-12 pb-12 px-8 text-center">
            <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2">
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Return to Home
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2">
                <Link to="/services">
                  <Search className="w-5 h-5" />
                  Browse Services
                </Link>
              </Button>
            </div>
            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">Popular Pages:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/about" className="text-primary hover:underline text-sm">About Us</Link>
                <Link to="/services" className="text-primary hover:underline text-sm">Services</Link>
                <Link to="/quote" className="text-primary hover:underline text-sm">Request Quote</Link>
                <Link to="/contact" className="text-primary hover:underline text-sm">Contact</Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
