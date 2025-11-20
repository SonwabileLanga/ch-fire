import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
