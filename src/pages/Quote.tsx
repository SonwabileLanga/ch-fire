import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ProgressIndicator from "@/components/ProgressIndicator";
import QuoteCalculator from "@/components/QuoteCalculator";
import QuoteRequest from "@/components/QuoteRequest";

const Quote = () => {
  return (
    <div className="min-h-screen">
      <ProgressIndicator />
      <Navbar />
      <QuoteCalculator />
      <QuoteRequest />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Quote;


