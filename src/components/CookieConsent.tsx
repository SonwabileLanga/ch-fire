import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure component is mounted first
    setIsMounted(true);
    
    // Small delay to ensure page is loaded
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookie-consent");
      if (!consent) {
        setIsVisible(true);
      }
    }, 500); // 500ms delay to ensure page is fully loaded

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isMounted || !isVisible) return null;

  return (
    <Card
      className={cn(
        "fixed bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 z-[100] max-w-2xl mx-auto shadow-2xl animate-slide-up border-2 border-primary/20"
      )}
    >
      <CardContent className="pt-6 pb-6 px-6 bg-background">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full flex-shrink-0 animate-pulse">
            <Cookie className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept", you consent to our use of cookies.{" "}
              <Link to="/cookies" className="text-primary hover:underline font-medium">
                Learn more
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={handleAccept}
                size="sm"
                className="flex-1 hover:scale-105 transition-transform"
              >
                Accept All Cookies
              </Button>
              <Button
                onClick={handleDecline}
                size="sm"
                variant="outline"
                className="flex-1"
              >
                Decline
              </Button>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 flex-shrink-0 hover:bg-muted"
            onClick={handleDecline}
            aria-label="Close cookie consent"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CookieConsent;


