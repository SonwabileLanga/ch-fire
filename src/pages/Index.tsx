import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Certifications from "@/components/Certifications";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Certifications />
      <WhyChooseUs />
      <BookingForm />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
