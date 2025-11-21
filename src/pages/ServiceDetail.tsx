import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressIndicator from "@/components/ProgressIndicator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Droplets, Radio, Flame, Shield, Camera, Lock,
  CheckCircle2, ArrowLeft, Phone, Mail, Calendar
} from "lucide-react";

const serviceData: Record<string, {
  icon: any;
  title: string;
  description: string;
  overview: string;
  features: string[];
  benefits: string[];
  applications: string[];
  compliance: string[];
  process: Array<{ step: string; description: string }>;
}> = {
  "sprinkler-systems": {
    icon: Droplets,
    title: "Sprinkler Systems",
    description: "Complete installation, maintenance, and inspection of fire sprinkler systems for all property types.",
    overview: "Fire sprinkler systems are the first line of defense against fire, automatically detecting and suppressing flames before they can spread. Our comprehensive sprinkler services ensure your property is protected 24/7 with systems that meet all South African fire safety standards.",
    features: [
      "Wet & Dry Sprinkler Systems",
      "Pre-Action Systems",
      "Deluge Systems",
      "Regular Inspections & Testing",
      "Emergency Repairs",
      "SANS 10252 Compliance",
      "System Design & Engineering",
      "Retrofit Installations",
    ],
    benefits: [
      "Automatic fire detection and suppression",
      "Reduced property damage and insurance premiums",
      "24/7 protection without human intervention",
      "Compliance with building regulations",
      "Peace of mind for property owners",
    ],
    applications: [
      "Commercial buildings",
      "Industrial facilities",
      "Residential complexes",
      "Healthcare facilities",
      "Educational institutions",
      "Retail stores",
    ],
    compliance: [
      "SANS 10252 - Fire Sprinkler Systems",
      "SAQCC FIRE certified installation",
      "Annual inspection certificates",
      "Building regulation compliance",
    ],
    process: [
      { step: "Site Assessment", description: "Comprehensive evaluation of your property to determine optimal sprinkler system design." },
      { step: "System Design", description: "Custom engineering and design based on building layout and fire risk assessment." },
      { step: "Installation", description: "Professional installation by certified technicians with minimal disruption." },
      { step: "Testing & Commissioning", description: "Thorough testing to ensure system meets all performance standards." },
      { step: "Ongoing Maintenance", description: "Regular inspections and maintenance to keep your system operational." },
    ],
  },
  "fire-alarms": {
    icon: Radio,
    title: "Fire Alarms",
    description: "Comprehensive fire alarm system installation, monitoring, and maintenance services.",
    overview: "Early detection is crucial in fire safety. Our advanced fire alarm systems provide immediate notification of fire conditions, allowing for rapid evacuation and emergency response. We design, install, and maintain systems that meet the highest safety standards.",
    features: [
      "Conventional & Addressable Systems",
      "Smoke & Heat Detectors",
      "Manual Call Points",
      "Alarm Monitoring",
      "24/7 Emergency Response",
      "Annual Inspections",
      "Voice Evacuation Systems",
      "Wireless Systems",
    ],
    benefits: [
      "Early fire detection saves lives",
      "Automatic emergency notification",
      "Integration with fire suppression systems",
      "Remote monitoring capabilities",
      "Compliance with safety regulations",
    ],
    applications: [
      "Office buildings",
      "Shopping centers",
      "Hotels and hospitality",
      "Manufacturing plants",
      "Warehouses",
      "Residential buildings",
    ],
    compliance: [
      "SANS 10139 - Fire Detection Systems",
      "SAQCC FIRE certified",
      "Annual testing and certification",
      "Building code compliance",
    ],
    process: [
      { step: "Risk Assessment", description: "Evaluate fire risks and determine optimal detection system layout." },
      { step: "System Selection", description: "Choose between conventional or addressable systems based on your needs." },
      { step: "Installation", description: "Professional installation of detectors, panels, and notification devices." },
      { step: "Commissioning", description: "Complete system testing and integration with emergency services." },
      { step: "Maintenance", description: "Regular testing, inspection, and maintenance to ensure reliability." },
    ],
  },
  "fire-extinguishers": {
    icon: Flame,
    title: "Fire Extinguishers",
    description: "Supply, installation, and regular servicing of all types of fire extinguishers.",
    overview: "Portable fire extinguishers are essential for immediate fire response. We provide comprehensive fire extinguisher services including supply, installation, regular servicing, and compliance certification to ensure your extinguishers are always ready when needed.",
    features: [
      "All Fire Classes (A, B, C, D, F)",
      "Supply & Installation",
      "Monthly Visual Inspections",
      "Annual Servicing",
      "Recharging & Refilling",
      "Compliance Certificates",
      "Wall Mounting & Signage",
      "Training & Education",
    ],
    benefits: [
      "Immediate fire response capability",
      "Compliance with fire safety regulations",
      "Reduced fire damage potential",
      "Insurance requirement compliance",
      "Peace of mind for occupants",
    ],
    applications: [
      "All commercial buildings",
      "Industrial facilities",
      "Vehicles and equipment",
      "Kitchens and cooking areas",
      "Electrical rooms",
      "Storage facilities",
    ],
    compliance: [
      "SANS 1475 - Fire Extinguishers",
      "Annual service certificates",
      "Monthly inspection records",
      "Building regulation compliance",
    ],
    process: [
      { step: "Assessment", description: "Evaluate your property to determine required extinguisher types and locations." },
      { step: "Supply", description: "Provide appropriate extinguishers for each fire class and risk area." },
      { step: "Installation", description: "Professional mounting with proper signage and accessibility." },
      { step: "Monthly Inspections", description: "Regular visual checks to ensure extinguishers are in place and accessible." },
      { step: "Annual Servicing", description: "Comprehensive servicing, testing, and certification." },
    ],
  },
  "smoke-detection": {
    icon: Shield,
    title: "Smoke Detection",
    description: "Advanced smoke detection systems for early warning and property protection.",
    overview: "Smoke detection systems provide the earliest possible warning of fire conditions, giving occupants time to evacuate safely. Our advanced detection systems use the latest technology to provide reliable, early warning protection for your property.",
    features: [
      "Ionization & Photoelectric Detectors",
      "Beam Detectors",
      "Aspirating Systems",
      "Interconnected Systems",
      "Battery Backup",
      "Regular Testing",
      "Wireless Options",
      "Smart Home Integration",
    ],
    benefits: [
      "Earliest possible fire detection",
      "Reduced false alarms",
      "Integration with alarm systems",
      "Battery backup for reliability",
      "Compliance with safety standards",
    ],
    applications: [
      "Residential properties",
      "Commercial buildings",
      "Hotels and accommodation",
      "Healthcare facilities",
      "Educational institutions",
      "Industrial facilities",
    ],
    compliance: [
      "SANS 10139 - Fire Detection",
      "Building code requirements",
      "Annual testing and certification",
      "Insurance compliance",
    ],
    process: [
      { step: "Site Survey", description: "Assess property layout and identify optimal detector placement." },
      { step: "System Design", description: "Design detection system based on building characteristics and risks." },
      { step: "Installation", description: "Professional installation of detectors and control panels." },
      { step: "Testing", description: "Comprehensive testing to ensure all detectors function correctly." },
      { step: "Maintenance", description: "Regular testing and maintenance to ensure ongoing reliability." },
    ],
  },
  "hydrants-cameras": {
    icon: Camera,
    title: "Hydrants & Cameras",
    description: "Fire hydrant systems and security camera installation for comprehensive protection.",
    overview: "Fire hydrants provide essential water supply for firefighting, while security cameras offer additional protection and monitoring. Our integrated approach ensures your property has both fire protection infrastructure and security surveillance.",
    features: [
      "Fire Hydrant Installation",
      "Hydrant Testing & Maintenance",
      "Security Camera Systems",
      "Integrated Monitoring",
      "Remote Access",
      "Maintenance Contracts",
      "HD Video Recording",
      "Mobile App Access",
    ],
    benefits: [
      "Reliable water supply for firefighting",
      "Enhanced security monitoring",
      "Remote access and control",
      "Deterrent to criminal activity",
      "Evidence collection capability",
    ],
    applications: [
      "Commercial properties",
      "Industrial facilities",
      "Residential complexes",
      "Shopping centers",
      "Warehouses",
      "Public buildings",
    ],
    compliance: [
      "SANS 10090 - Fire Hydrants",
      "Building regulations",
      "Annual hydrant testing",
      "Security standards compliance",
    ],
    process: [
      { step: "Planning", description: "Assess requirements for hydrant placement and camera coverage." },
      { step: "Design", description: "Design integrated system for optimal fire protection and security." },
      { step: "Installation", description: "Professional installation of hydrants and camera systems." },
      { step: "Integration", description: "Connect systems to monitoring and control platforms." },
      { step: "Maintenance", description: "Regular testing, inspection, and system updates." },
    ],
  },
  "access-control": {
    icon: Lock,
    title: "Access Control",
    description: "Integrated access control and security systems for enhanced safety.",
    overview: "Access control systems provide secure entry management while integrating seamlessly with fire safety systems. Our solutions ensure that in the event of a fire, access control systems work in harmony with fire alarms to facilitate safe evacuation.",
    features: [
      "Card & Biometric Access",
      "Door Entry Systems",
      "Visitor Management",
      "Integration with Fire Systems",
      "24/7 Monitoring",
      "System Maintenance",
      "Mobile Access",
      "Time & Attendance",
    ],
    benefits: [
      "Enhanced security and access management",
      "Integration with fire safety systems",
      "Automated access control",
      "Visitor tracking and management",
      "Compliance with security standards",
    ],
    applications: [
      "Office buildings",
      "Industrial facilities",
      "Residential complexes",
      "Healthcare facilities",
      "Educational institutions",
      "Government buildings",
    ],
    compliance: [
      "Security industry standards",
      "Fire safety integration requirements",
      "Data protection compliance",
      "Building code requirements",
    ],
    process: [
      { step: "Requirements Analysis", description: "Understand access control needs and integration requirements." },
      { step: "System Design", description: "Design integrated access control and fire safety system." },
      { step: "Installation", description: "Install access control hardware and integrate with fire systems." },
      { step: "Configuration", description: "Configure access levels, schedules, and fire system integration." },
      { step: "Support", description: "Ongoing maintenance, updates, and user support." },
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <ProgressIndicator />
        <Navbar />
        <div className="container px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <ProgressIndicator />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </Button>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Overview */}
            <Card className="border-2 animate-slide-up">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.overview}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="border-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-2 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle>Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Applications */}
            <Card className="border-2 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <CardTitle>Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.applications.map((app, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{app}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="border-2 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <CardHeader>
                <CardTitle>Our Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-primary">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{step.step}</h4>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="border-2 animate-slide-up" style={{ animationDelay: '500ms' }}>
              <CardHeader>
                <CardTitle>Compliance & Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.compliance.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 animate-slide-up" style={{ animationDelay: '600ms' }}>
              <CardContent className="pt-8 pb-8">
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold">Ready to Get Started?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Contact us today for a free consultation and quote. Our experts are ready to help protect your property.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <Link to="/quote">
                        <Calendar className="mr-2 h-5 w-5" />
                        Request a Quote
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link to="/contact">
                        <Phone className="mr-2 h-5 w-5" />
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServiceDetail;

