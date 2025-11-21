import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, CheckCircle, Building2, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { sendQuoteEmail } from "@/lib/emailService";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  propertyType: z.string().min(1, "Please select property type"),
  serviceType: z.string().min(1, "Please select a service"),
  propertySize: z.string().min(1, "Please select property size"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City is required"),
  postalCode: z.string().min(4, "Postal code is required"),
  urgency: z.string().min(1, "Please select urgency level"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  additionalInfo: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const QuoteRequest = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      propertyType: "",
      serviceType: "",
      propertySize: "",
      address: "",
      city: "",
      postalCode: "",
      urgency: "",
      budget: "",
      timeline: "",
      additionalInfo: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    console.log("Quote request submitted:", data);
    
    // Send email via Resend
    const emailResult = await sendQuoteEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      propertyType: data.propertyType,
      serviceType: data.serviceType,
      propertySize: data.propertySize,
      address: data.address,
      city: data.city,
      postalCode: data.postalCode,
      urgency: data.urgency,
      budget: data.budget,
      timeline: data.timeline,
      additionalInfo: data.additionalInfo,
    });

    if (emailResult.success) {
      toast.success("Quote request sent! We'll contact you within 24 hours.");
    } else {
      console.error("Email error details:", emailResult.error);
      toast.error(`Email notification failed: ${emailResult.error || 'Unknown error'}. WhatsApp message sent instead.`);
    }
    
    // Create detailed quote message
    const message = `*New Quote Request*\n\n*Contact Information:*\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}${data.company ? `\nCompany: ${data.company}` : ''}\n\n*Property Details:*\nType: ${data.propertyType}\nSize: ${data.propertySize}\nAddress: ${data.address}\nCity: ${data.city}\nPostal Code: ${data.postalCode}\n\n*Service Request:*\nService Type: ${data.serviceType}\nUrgency: ${data.urgency}${data.budget ? `\nBudget: ${data.budget}` : ''}${data.timeline ? `\nTimeline: ${data.timeline}` : ''}\n\n${data.additionalInfo ? `*Additional Information:*\n${data.additionalInfo}` : ''}`;
    
    const whatsappUrl = `https://wa.me/27619065523?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    form.reset();
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="quote" className="py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Request a <span className="text-primary">Free Quote</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a detailed estimate for your fire protection needs. No obligation, free consultation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 pb-6 text-center">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  Expert assessment of your fire protection needs
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 pb-6 text-center">
                <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Detailed Quote</h3>
                <p className="text-sm text-muted-foreground">
                  Transparent pricing with no hidden costs
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="pt-6 pb-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  Receive your quote within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/20 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl">Quote Request Form</CardTitle>
              <CardDescription>
                Fill out the form below and we'll provide you with a comprehensive quote
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12 animate-scale-in">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Quote Request Sent!</h3>
                  <p className="text-muted-foreground mb-4">
                    We've received your quote request and will contact you within 24 hours.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Check your email for confirmation and next steps.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Phone className="w-5 h-5 text-primary" />
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="061 234 5678" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="Company Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Property Details */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        Property Details
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="propertyType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select property type" />
                                  </SelectTrigger>
                                </FormControl>
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
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="propertySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Property Size *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="small">Small (&lt; 500 m²)</SelectItem>
                                  <SelectItem value="medium">Medium (500 - 2000 m²)</SelectItem>
                                  <SelectItem value="large">Large (2000 - 5000 m²)</SelectItem>
                                  <SelectItem value="xlarge">Extra Large (&gt; 5000 m²)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Street Address *</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main Street" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Mossel Bay" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="postalCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Postal Code *</FormLabel>
                                <FormControl>
                                  <Input placeholder="6500" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Requirements */}
                    <div className="space-y-4 pt-4 border-t">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        Service Requirements
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="serviceType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Type *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="sprinkler-install">Sprinkler System Installation</SelectItem>
                                  <SelectItem value="sprinkler-maintenance">Sprinkler System Maintenance</SelectItem>
                                  <SelectItem value="fire-alarm-install">Fire Alarm Installation</SelectItem>
                                  <SelectItem value="fire-alarm-maintenance">Fire Alarm Maintenance</SelectItem>
                                  <SelectItem value="extinguisher-supply">Fire Extinguisher Supply</SelectItem>
                                  <SelectItem value="smoke-detector-install">Smoke Detector Installation</SelectItem>
                                  <SelectItem value="full-system">Complete Fire Protection System</SelectItem>
                                  <SelectItem value="inspection">Fire Safety Inspection</SelectItem>
                                  <SelectItem value="consultation">Consultation Only</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="urgency"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Urgency Level *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select urgency" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="emergency">Emergency (Within 24 hours)</SelectItem>
                                  <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                                  <SelectItem value="normal">Normal (Within 1 month)</SelectItem>
                                  <SelectItem value="planning">Planning (1-3 months)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Range (Optional)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under-10k">Under R10,000</SelectItem>
                                  <SelectItem value="10k-50k">R10,000 - R50,000</SelectItem>
                                  <SelectItem value="50k-100k">R50,000 - R100,000</SelectItem>
                                  <SelectItem value="100k-250k">R100,000 - R250,000</SelectItem>
                                  <SelectItem value="over-250k">Over R250,000</SelectItem>
                                  <SelectItem value="not-sure">Not Sure</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Timeline (Optional)</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="asap">As Soon As Possible</SelectItem>
                                  <SelectItem value="1-month">Within 1 Month</SelectItem>
                                  <SelectItem value="3-months">Within 3 Months</SelectItem>
                                  <SelectItem value="6-months">Within 6 Months</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4 pt-4 border-t">
                      <FormField
                        control={form.control}
                        name="additionalInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us more about your requirements, any specific concerns, or questions..."
                                className="resize-none"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <FormField
                      control={form.control}
                      name="agreeToTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">
                              I agree to the terms and conditions and privacy policy *
                            </FormLabel>
                            <p className="text-xs text-muted-foreground">
                              By submitting this form, you consent to being contacted by CH Fire Services regarding your quote request.
                            </p>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg h-14 hover:scale-105 transition-transform duration-300"
                    >
                      <Calculator className="mr-2 h-5 w-5" />
                      Request Free Quote
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequest;


