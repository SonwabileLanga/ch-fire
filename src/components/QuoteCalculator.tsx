import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Calculator, 
  TrendingUp, 
  Building2, 
  Ruler, 
  Shield, 
  CheckCircle2,
  ArrowRight,
  Info,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

// Pricing configuration
const basePrices = {
  propertyType: {
    residential: { multiplier: 1.0, base: 5000 },
    commercial: { multiplier: 1.5, base: 8000 },
    industrial: { multiplier: 2.0, base: 12000 },
    healthcare: { multiplier: 2.2, base: 15000 },
    educational: { multiplier: 1.8, base: 10000 },
    retail: { multiplier: 1.6, base: 9000 },
    hospitality: { multiplier: 1.7, base: 9500 },
    other: { multiplier: 1.5, base: 8000 },
  },
  propertySize: {
    small: { multiplier: 0.8 }, // < 500 m²
    medium: { multiplier: 1.0 }, // 500 - 2000 m²
    large: { multiplier: 1.5 }, // 2000 - 5000 m²
    xlarge: { multiplier: 2.2 }, // > 5000 m²
  },
  services: {
    "sprinkler-install": { base: 15000, multiplier: 1.0 },
    "sprinkler-maintenance": { base: 2500, multiplier: 0.3 },
    "sprinkler-inspect": { base: 1500, multiplier: 0.2 },
    "fire-alarm-install": { base: 12000, multiplier: 0.8 },
    "fire-alarm-maintenance": { base: 2000, multiplier: 0.25 },
    "fire-alarm-inspect": { base: 1200, multiplier: 0.15 },
    "extinguisher-supply": { base: 3000, multiplier: 0.4 },
    "extinguisher-service": { base: 1500, multiplier: 0.2 },
    "smoke-detector-install": { base: 8000, multiplier: 0.6 },
    "smoke-detector-inspect": { base: 1000, multiplier: 0.15 },
    "hydrant-install": { base: 10000, multiplier: 0.7 },
    "access-control": { base: 18000, multiplier: 1.2 },
    "full-system": { base: 35000, multiplier: 2.5 },
    "emergency-lighting": { base: 6000, multiplier: 0.5 },
    "fire-risk-assessment": { base: 4000, multiplier: 0.3 },
  },
};

interface CalculatorState {
  propertyType: string;
  propertySize: string;
  selectedServices: string[];
}

const QuoteCalculator = () => {
  const [state, setState] = useState<CalculatorState>({
    propertyType: "",
    propertySize: "",
    selectedServices: [],
  });

  const [showResults, setShowResults] = useState(false);

  // Calculate price estimate
  const priceEstimate = useMemo(() => {
    if (!state.propertyType || !state.propertySize || state.selectedServices.length === 0) {
      return null;
    }

    const propertyConfig = basePrices.propertyType[state.propertyType as keyof typeof basePrices.propertyType];
    const sizeConfig = basePrices.propertySize[state.propertySize as keyof typeof basePrices.propertySize];
    
    let totalMin = 0;
    let totalMax = 0;

    state.selectedServices.forEach((service) => {
      const serviceConfig = basePrices.services[service as keyof typeof basePrices.services];
      if (serviceConfig) {
        const basePrice = serviceConfig.base;
        const serviceMultiplier = serviceConfig.multiplier;
        const sizeMultiplier = sizeConfig.multiplier;
        
        // Calculate service price with property type and size adjustments
        const adjustedBase = propertyConfig.base * serviceMultiplier;
        const servicePrice = adjustedBase * sizeMultiplier;
        
        // Add service-specific base
        const minPrice = servicePrice * 0.7; // 30% lower bound
        const maxPrice = servicePrice * 1.4; // 40% upper bound
        
        totalMin += minPrice;
        totalMax += maxPrice;
      }
    });

    // Round to nearest thousand
    totalMin = Math.round(totalMin / 1000) * 1000;
    totalMax = Math.round(totalMax / 1000) * 1000;

    return {
      min: totalMin,
      max: totalMax,
      average: Math.round((totalMin + totalMax) / 2),
    };
  }, [state]);

  const handleServiceToggle = (service: string) => {
    setState((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
    setShowResults(false);
  };

  const handleCalculate = () => {
    if (state.propertyType && state.propertySize && state.selectedServices.length > 0) {
      setShowResults(true);
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById("quote-results");
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  const serviceLabels: Record<string, string> = {
    "sprinkler-install": "Sprinkler System Installation",
    "sprinkler-maintenance": "Sprinkler System Maintenance",
    "sprinkler-inspect": "Sprinkler System Inspection",
    "fire-alarm-install": "Fire Alarm Installation",
    "fire-alarm-maintenance": "Fire Alarm Maintenance",
    "fire-alarm-inspect": "Fire Alarm Inspection",
    "extinguisher-supply": "Fire Extinguisher Supply",
    "extinguisher-service": "Fire Extinguisher Service",
    "smoke-detector-install": "Smoke Detector Installation",
    "smoke-detector-inspect": "Smoke Detector Inspection",
    "hydrant-install": "Fire Hydrant Installation",
    "access-control": "Access Control System",
    "full-system": "Complete Fire Protection System",
    "emergency-lighting": "Emergency Lighting System",
    "fire-risk-assessment": "Fire Risk Assessment",
  };

  const isFormValid = state.propertyType && state.propertySize && state.selectedServices.length > 0;

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Instant <span className="text-primary">Quote Calculator</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate for your fire protection needs. Select your requirements below.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="border-2 border-primary/20 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  Your Requirements
                </CardTitle>
                <CardDescription>
                  Fill in your property details and select the services you need
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Property Type */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    Property Type *
                  </Label>
                  <Select
                    value={state.propertyType}
                    onValueChange={(value) => {
                      setState((prev) => ({ ...prev, propertyType: value }));
                      setShowResults(false);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="hospitality">Hospitality</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Property Size */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-primary" />
                    Property Size *
                  </Label>
                  <Select
                    value={state.propertySize}
                    onValueChange={(value) => {
                      setState((prev) => ({ ...prev, propertySize: value }));
                      setShowResults(false);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select property size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (&lt; 500 m²)</SelectItem>
                      <SelectItem value="medium">Medium (500 - 2000 m²)</SelectItem>
                      <SelectItem value="large">Large (2000 - 5000 m²)</SelectItem>
                      <SelectItem value="xlarge">Extra Large (&gt; 5000 m²)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* Services Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Services Needed * (Select all that apply)
                  </Label>
                  <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                    {Object.entries(serviceLabels).map(([value, label]) => (
                      <div
                        key={value}
                        className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <Checkbox
                          id={value}
                          checked={state.selectedServices.includes(value)}
                          onCheckedChange={() => handleServiceToggle(value)}
                          className="mt-1"
                        />
                        <Label
                          htmlFor={value}
                          className="flex-1 cursor-pointer text-sm leading-relaxed"
                        >
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {state.selectedServices.length > 0 && (
                    <p className="text-sm text-muted-foreground">
                      {state.selectedServices.length} service{state.selectedServices.length !== 1 ? "s" : ""} selected
                    </p>
                  )}
                </div>

                <Button
                  onClick={handleCalculate}
                  disabled={!isFormValid}
                  size="lg"
                  className="w-full text-lg h-14 hover:scale-105 transition-transform duration-300"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Estimate
                </Button>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-semibold mb-1">Note:</p>
                      <p>
                        This is an estimated price range. Final pricing depends on site-specific factors, 
                        compliance requirements, and current market rates. Contact us for a detailed, 
                        no-obligation quote.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Panel */}
            <div className="space-y-6">
              {showResults && priceEstimate ? (
                <Card
                  id="quote-results"
                  className="border-2 border-primary/40 bg-gradient-to-br from-primary/5 to-accent/5 animate-scale-in"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-primary" />
                      Your Estimate
                    </CardTitle>
                    <CardDescription>
                      Estimated price range for your selected services
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Price Display */}
                    <div className="text-center py-6 bg-background rounded-lg border-2 border-primary/20">
                      <p className="text-sm text-muted-foreground mb-2">Estimated Price Range</p>
                      <div className="flex items-baseline justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold text-primary">
                          R {priceEstimate.min.toLocaleString()}
                        </span>
                        <span className="text-xl text-muted-foreground">-</span>
                        <span className="text-3xl font-bold text-primary">
                          R {priceEstimate.max.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Average: <span className="font-semibold text-foreground">R {priceEstimate.average.toLocaleString()}</span>
                      </p>
                    </div>

                    {/* Selected Services Summary */}
                    <div className="space-y-3">
                      <Label className="text-sm font-semibold">Selected Services:</Label>
                      <div className="space-y-2">
                        {state.selectedServices.map((service) => (
                          <div
                            key={service}
                            className="flex items-center gap-2 p-2 bg-background rounded border"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{serviceLabels[service]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Property Details Summary */}
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Property Type:</span>
                        <span className="font-medium capitalize">{state.propertyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Property Size:</span>
                        <span className="font-medium capitalize">
                          {state.propertySize === "small" && "< 500 m²"}
                          {state.propertySize === "medium" && "500 - 2000 m²"}
                          {state.propertySize === "large" && "2000 - 5000 m²"}
                          {state.propertySize === "xlarge" && "> 5000 m²"}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Button
                        asChild
                        size="lg"
                        className="w-full"
                      >
                        <Link to="/quote">
                          Get Detailed Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full"
                      >
                        <Link to="/contact">
                          Contact Us for Consultation
                        </Link>
                      </Button>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                      <p className="text-sm text-center">
                        <span className="font-semibold">Free Consultation Available</span>
                        <br />
                        <span className="text-muted-foreground">
                          Get expert advice and a detailed quote tailored to your specific needs
                        </span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-2 border-dashed border-muted-foreground/30">
                  <CardContent className="pt-12 pb-12 text-center">
                    <TrendingUp className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Your Estimate Awaits</h3>
                    <p className="text-muted-foreground text-sm">
                      Fill in your requirements and click "Calculate Estimate" to see your instant quote
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <Card className="mt-8 border-2 border-primary/10">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">No Obligation</h4>
                  <p className="text-sm text-muted-foreground">
                    Free estimates with no commitment required
                  </p>
                </div>
                <div>
                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Accurate Pricing</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on current market rates and standards
                  </p>
                </div>
                <div>
                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    Get detailed quotes within 24 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;

