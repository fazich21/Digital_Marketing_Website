import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MediaPartners from "@/components/MediaPartners";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsSection from "@/components/ClientsSection";
import AboutPreview from "@/components/AboutPreview";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MediaPartners />
      <ServicesSection />
      <WhyChooseUs />
      <AboutPreview />
      <ClientsSection />
      <ReviewsSection />
      <FAQSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
