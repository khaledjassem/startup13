import "@/App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { TeamSection } from "./components/TeamSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <LanguageProvider>
      <div className="App noise-overlay">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#0A111C',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff'
            }
          }}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
