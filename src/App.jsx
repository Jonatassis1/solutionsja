import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhySection from './components/WhySection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';
import FooterNew from './components/FooterNew';
import React from 'react';

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <section id="hero">
        <HeroSection />
      </section>

      <ServicesSection />

      <WhySection />

      <ProcessSection />

      <CTASection />

      <FooterNew />
    </div>
  );
}

export default App;
