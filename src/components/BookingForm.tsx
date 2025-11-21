import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Clock, Phone, Mail, CheckCircle, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { sendBookingEmail } from "@/lib/emailService";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  date: z.date().refine((date) => date !== undefined, {
    message: "Please select a date",
  }),
  time: z.string().min(1, "Please select a time"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendMethod, setSendMethod] = useState<"email" | "whatsapp">("email");

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    console.log("Booking submitted:", data);
    
    if (sendMethod === "email") {
      // Send via Resend Email API
      try {
        const emailResult = await sendBookingEmail({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          date: format(data.date, "PPP"),
          time: data.time,
          address: data.address,
          message: data.message,
        });

        if (emailResult.success) {
          toast.success("Booking request sent via email! We'll contact you shortly.");
          setIsSubmitted(true);
          form.reset();
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          toast.error(`Email failed: ${emailResult.error || 'Unknown error'}. Please try WhatsApp option.`);
        }
      } catch (emailError: any) {
        console.error("Email error:", emailError);
        toast.error(`Email failed: ${emailError.message || 'Unknown error'}. Please try WhatsApp option.`);
      }
    } else {
      // Send via WhatsApp
      const whatsappMessage = `*New Service Booking*\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nService: ${data.service}\nPreferred Date: ${format(data.date, "PPP")}\nPreferred Time: ${data.time}\nAddress: ${data.address}\n${data.message ? `\nAdditional Notes: ${data.message}` : ''}`;
      const whatsappUrl = `https://wa.me/27619065523?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      toast.success("Opening WhatsApp to send your booking request...");
      setIsSubmitted(true);
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const timeSlots = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book a <span className="text-primary">Service</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule your fire protection service today. Our experts are ready to help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl">Service Booking Form</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12 animate-scale-in">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Booking Request Sent!</h3>
                  <p className="text-muted-foreground">
                    We've received your booking request and will contact you shortly.
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    </div>

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
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Type *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sprinkler-install">Sprinkler System Installation</SelectItem>
                              <SelectItem value="sprinkler-inspect">Sprinkler System Inspection</SelectItem>
                              <SelectItem value="sprinkler-maintenance">Sprinkler System Maintenance</SelectItem>
                              <SelectItem value="fire-alarm-install">Fire Alarm Installation</SelectItem>
                              <SelectItem value="fire-alarm-inspect">Fire Alarm Inspection</SelectItem>
                              <SelectItem value="fire-alarm-maintenance">Fire Alarm Maintenance</SelectItem>
                              <SelectItem value="extinguisher-supply">Fire Extinguisher Supply</SelectItem>
                              <SelectItem value="extinguisher-service">Fire Extinguisher Service</SelectItem>
                              <SelectItem value="smoke-detector-install">Smoke Detector Installation</SelectItem>
                              <SelectItem value="smoke-detector-inspect">Smoke Detector Inspection</SelectItem>
                              <SelectItem value="emergency">Emergency Service</SelectItem>
                              <SelectItem value="consultation">Free Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Preferred Date *</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date() || date < new Date("1900-01-01")
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select time" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((time) => (
                                  <SelectItem key={time} value={time}>
                                    {time}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="Full address including city" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific requirements or questions?"
                              className="resize-none"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h4 className="font-bold mb-3 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-primary" />
                        Need Immediate Assistance?
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>Call us directly:</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a href="tel:0619065523" className="text-primary hover:underline font-medium">
                            Clayton: 061 906 5523
                          </a>
                          <a href="tel:0612341748" className="text-primary hover:underline font-medium">
                            Dominique: 061 234 1748
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border-2 border-primary/20">
                      <h4 className="font-bold mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-primary" />
                        How would you like to send your request?
                      </h4>
                      <RadioGroup 
                        value={sendMethod} 
                        onValueChange={(value) => setSendMethod(value as "email" | "whatsapp")}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
                          <RadioGroupItem value="email" id="email" />
                          <Label htmlFor="email" className="flex-1 cursor-pointer flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <div>
                              <div className="font-semibold">Send via Email (Recommended)</div>
                              <div className="text-sm text-muted-foreground">We'll send you a confirmation email</div>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg border-2 border-muted hover:border-primary/20 transition-colors cursor-pointer">
                          <RadioGroupItem value="whatsapp" id="whatsapp" />
                          <Label htmlFor="whatsapp" className="flex-1 cursor-pointer flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-green-600" />
                            <div>
                              <div className="font-semibold">Send via WhatsApp</div>
                              <div className="text-sm text-muted-foreground">Opens WhatsApp to send your message</div>
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg h-14 hover:scale-105 transition-transform duration-300"
                    >
                      {sendMethod === "email" ? (
                        <>
                          <Mail className="mr-2 h-5 w-5" />
                          Submit via Email
                        </>
                      ) : (
                        <>
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Send via WhatsApp
                        </>
                      )}
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

export default BookingForm;
