import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "How often should fire extinguishers be serviced?",
    answer: "Fire extinguishers should be professionally serviced annually according to South African fire safety regulations (SANS 1475). However, monthly visual inspections by building occupants are also recommended to ensure they're in working order.",
  },
  {
    question: "What is involved in a sprinkler system inspection?",
    answer: "Our comprehensive sprinkler system inspection includes checking water pressure and flow rates, testing alarm systems, inspecting all sprinkler heads for damage or corrosion, verifying valve operation, and ensuring compliance with SANS 10252 standards. We provide detailed reports with any recommendations for maintenance or repairs.",
  },
  {
    question: "Do you provide emergency call-out services?",
    answer: "Yes! We offer 24/7 emergency services for critical fire protection system failures. Call us immediately at 061 906 5523 (Clayton) or 061 234 1748 (Dominique) if you experience any fire safety system malfunction.",
  },
  {
    question: "How long does a fire alarm installation take?",
    answer: "Installation time varies based on the size and complexity of the building. A typical small to medium commercial property takes 2-5 days. We'll provide a detailed timeline during your free consultation and work efficiently to minimize disruption to your operations.",
  },
  {
    question: "Are you certified and compliant with South African standards?",
    answer: "Absolutely. CH Fire Services is SAQCC FIRE registered and all our work complies with South African National Standards (SANS) and SABS requirements. We're also SABBS approved and SAMSA certified for maritime fire protection systems.",
  },
  {
    question: "What areas do you service?",
    answer: "We're based in Mossel Bay and provide comprehensive fire protection services throughout the Garden Route region, including George, Knysna, Oudtshoorn, and surrounding areas. Contact us to confirm coverage for your specific location.",
  },
  {
    question: "Can you help with fire safety compliance for insurance?",
    answer: "Yes, we provide detailed inspection reports and certificates that meet insurance requirements. Many insurance companies require annual fire safety inspections, and our comprehensive documentation ensures you maintain compliance and potentially reduce premiums.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, EFT, credit cards, and for commercial clients, we offer account facilities with approved credit terms. Payment terms are discussed during quotation.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our fire protection services
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-2 animate-slide-up">
          <CardContent className="pt-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
