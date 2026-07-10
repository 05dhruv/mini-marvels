import Header from "./src/components/Header";
import HeroSection from "./src/components/HeroSection";
import AboutSection from "./src/components/AboutSection";
import ServiceSection from "./src/components/ServiceSection";
import WhyChooseSection from "./src/components/WhyChooseSection";
import ParentSection from "./src/components/ParentSection";
import PatientResourceSection from "./src/components/PatientResourceSection";
import ContactSection from "./src/components/contactSection";
import AppointmentPopup from "./src/components/AppointmentPopup";
import FloatingButtons from "./src/components/FloatingButtons";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseSection />
      <ParentSection />
      <PatientResourceSection />
      <ContactSection />
      <AppointmentPopup />
      <>
  {/* Page Content */}

  <FloatingButtons />
</>
    </>
  );
}