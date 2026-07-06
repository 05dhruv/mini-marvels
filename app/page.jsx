import Header from "./src/components/Header";
import HeroSection from "./src/components/HeroSection";
import AboutSection from "./src/components/AboutSection";
import ServiceSection from "./src/components/ServiceSection";
import WhyChooseSection from "./src/components/WhyChooseSection";
import ParentSection from "./src/components/ParentSection";
import Footer from "./src/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseSection />
      <ParentSection />
      <Footer />
    </>
  );
}