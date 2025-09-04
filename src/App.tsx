import "./App.css";
import {
  Header,
  HeroSection,
  AboutSection,
  PublicationsSection,
  TeachingSection,
  ContactSection,
  Footer,
} from "./components";

function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <Header />
      <HeroSection />
      <AboutSection />
      <PublicationsSection />
      <TeachingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
