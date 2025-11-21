import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Phone, Calculator, Calendar, Info, Shield, HelpCircle, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const quickActions = [
  {
    icon: Calculator,
    label: "Get a Quote",
    action: "quote",
    description: "Request a free quote for our services"
  },
  {
    icon: Calendar,
    label: "Book Service",
    action: "booking",
    description: "Schedule an inspection or installation"
  },
  {
    icon: Info,
    label: "Our Services",
    action: "services",
    description: "Learn about what we offer"
  },
  {
    icon: Shield,
    label: "Emergency",
    action: "emergency",
    description: "24/7 emergency fire protection"
  },
];

const commonQuestions = [
  {
    question: "How often should fire extinguishers be serviced?",
    answer: "Fire extinguishers should be serviced annually according to SANS 1475 standards, with monthly visual inspections."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes! We provide 24/7 emergency call-out services. Call Clayton: 061 906 5523 or Dominique: 061 234 1748."
  },
  {
    question: "What areas do you service?",
    answer: "We service Mossel Bay and the Garden Route region, including George, Knysna, Oudtshoorn, and surrounding areas."
  },
  {
    question: "Are you certified?",
    answer: "Yes, we are SAQCC FIRE registered and comply with all South African National Standards (SANS) and SABS requirements."
  },
];

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [showFAQ, setShowFAQ] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleSend = () => {
    if (message.trim()) {
      // Open WhatsApp with pre-filled message
      const whatsappUrl = `https://wa.me/27619065523?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setMessage("");
      setIsOpen(false);
    }
  };

  const handleQuickAction = (action: string) => {
    let whatsappMessage = "";
    let route = "";

    switch (action) {
      case "quote":
        whatsappMessage = "Hi! I'd like to request a free quote for fire protection services.";
        route = "/quote";
        break;
      case "booking":
        whatsappMessage = "Hi! I'd like to book a fire safety service or inspection.";
        route = "/#booking";
        break;
      case "services":
        route = "/services";
        break;
      case "emergency":
        whatsappMessage = "URGENT: I need emergency fire protection assistance!";
        break;
    }

    if (route) {
      if (route.startsWith("/#")) {
        window.location.href = route;
      } else {
        window.location.href = route;
      }
      setIsOpen(false);
    } else if (whatsappMessage) {
      const whatsappUrl = `https://wa.me/27619065523?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank");
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={cn(
          "fixed bottom-20 right-4 sm:right-8 z-[60] rounded-full shadow-lg h-14 w-14 transition-all duration-300 hover:scale-110",
          isOpen && "bg-destructive hover:bg-destructive/90"
        )}
        aria-label="Open live chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-28 right-4 sm:right-8 sm:bottom-32 z-[55] w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-md shadow-2xl animate-scale-in">
          <CardHeader className="bg-primary text-primary-foreground pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Live Chat
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80">
              We'll respond via WhatsApp
            </p>
          </CardHeader>
          <CardContent className="pt-4 max-h-[600px] overflow-y-auto">
            <div className="space-y-4">
              {/* Welcome Message */}
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Hi! 👋 How can we help you today?</p>
                <p className="text-xs text-muted-foreground">
                  Choose an option below or send us a message. We'll respond via WhatsApp.
                </p>
              </div>

              {/* Quick Actions */}
              {showQuickActions && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Quick Actions</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="h-auto py-3 flex flex-col items-center gap-1 text-xs hover:bg-primary/10 hover:border-primary/50"
                          onClick={() => handleQuickAction(action.action)}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="text-center leading-tight">{action.label}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}

              <Separator />

              {/* Common Questions */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Common Questions</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 text-xs"
                    onClick={() => setShowFAQ(!showFAQ)}
                  >
                    {showFAQ ? "Hide" : "Show"}
                  </Button>
                </div>
                {showFAQ && (
                  <div className="space-y-2">
                    {commonQuestions.map((faq, index) => (
                      <div
                        key={index}
                        className="border rounded-lg p-2 cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
                      >
                        <div className="flex items-start gap-2">
                          <HelpCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs font-medium">{faq.question}</p>
                            {selectedQuestion === index && (
                              <p className="text-xs text-muted-foreground mt-2 pl-5">
                                {faq.answer}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Separator />

              {/* Contact Options */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Contact Us</p>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start gap-2"
                    asChild
                  >
                    <a href="tel:0619065523">
                      <Phone className="w-4 h-4" />
                      Call Clayton: 061 906 5523
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start gap-2"
                    asChild
                  >
                    <a href="tel:0612341748">
                      <Phone className="w-4 h-4" />
                      Call Dominique: 061 234 1748
                    </a>
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Custom Message */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Or Send a Message</p>
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className="h-10 text-sm"
                />
                <Button
                  onClick={handleSend}
                  className="w-full gap-2"
                  disabled={!message.trim()}
                >
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </Button>
              </div>

              {/* WhatsApp Direct Option */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <p className="text-xs font-semibold">Prefer WhatsApp?</p>
                </div>
                <Button
                  size="sm"
                  className="w-full gap-2 bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/27619065523?text=${encodeURIComponent("Hi! I'd like to get more information about your fire protection services.")}`;
                    window.open(whatsappUrl, "_blank");
                    setIsOpen(false);
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default LiveChat;


