import './App.css';
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ModulesStrip from './components/ModulesStrip';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhySection from './components/WhySection';
import ProcessSection from './components/ProcessSection';
import CustomToolsSection from './components/CustomToolsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import FooterNew from './components/FooterNew';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ModulesStrip />
        <ServicesSection />
        <AboutSection />
        <WhySection />
        <ProcessSection />
        <CustomToolsSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterNew />
      <WhatsAppFloat />
    </>
  );
}

export default App;
