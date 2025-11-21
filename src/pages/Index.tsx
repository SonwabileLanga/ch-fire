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
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressIndicator from "@/components/ProgressIndicator";
import EmergencyBanner from "@/components/EmergencyBanner";
import ImageGallery from "@/components/ImageGallery";
import Newsletter from "@/components/Newsletter";
import ClientLogos from "@/components/ClientLogos";
import Team from "@/components/Team";
import InteractiveMap from "@/components/InteractiveMap";
import LiveChat from "@/components/LiveChat";
import CookieConsent from "@/components/CookieConsent";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProgressIndicator />
      <Navbar />
      <EmergencyBanner />
      <Hero />
      <Stats />
      <Services />
      <ClientLogos />
      <Certifications />
      <WhyChooseUs />
      <ImageGallery />
      <VideoSection />
      <Team />
      <BookingForm />
      <Testimonials />
      <FAQ />
      <InteractiveMap />
      <Contact />
      <Newsletter />
      <Footer />
      <ScrollToTop />
      <LiveChat />
      <CookieConsent />
    </div>
  );
};

export default Index;
