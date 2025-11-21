import { useState, useEffect } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Phone, AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Alert className={cn(
      "fixed left-0 right-0 z-40 bg-destructive/95 text-destructive-foreground border-none rounded-none shadow-lg transition-all duration-300",
      isScrolled ? "top-20" : "top-20"
    )}>
      <AlertTriangle className="h-5 w-5" />
      <AlertDescription className="flex items-center justify-between flex-wrap gap-4">
        <span className="font-semibold text-sm sm:text-base">
          Emergency Service Available 24/7 - Call Now!
        </span>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              className="gap-2 text-xs sm:text-sm"
              asChild
            >
              <a href="tel:0619065523">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Clayton: </span>061 906 5523
              </a>
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="gap-2 text-xs sm:text-sm"
              asChild
            >
              <a href="tel:0612341748">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Dominique: </span>061 234 1748
              </a>
            </Button>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-6 w-6 text-destructive-foreground hover:bg-destructive-foreground/20"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default EmergencyBanner;

