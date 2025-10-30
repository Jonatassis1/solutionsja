import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import ConsultingSection from './components/ConsultingSection';
import LeadershipSection from './components/LeadershipSection';
import TrainingSection from './components/TrainingSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import React from 'react';

/**
 * Componente principal da aplicação
 * Landing page completa da SolutionsJá com todas as seções
 *
 * Estrutura:
 * 0. Header - Navegação fixa
 * 1. Hero Section - Seção principal com CTA
 * 2. Solutions Section - 3 pilares (Tecnologia, Processos, Liderança)
 * 3. Leadership Section - Desenvolvimento de liderança
 * 4. Consulting Section - Detalhes técnicos do Protheus
 * 5. Training Section - Treinamentos e certificações
 * 6. Blog Section - Últimas notícias do Protheus
 * 7. Contact Section - Formulário de contato e CTA final
 * 8. Footer - Links e informações da empresa
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* Header - Navegação */}
      <Header />

      {/* Seção Hero - Destaque principal */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Seção de Soluções - 3 Pilares */}
      <section id="services">
        <SolutionsSection />
      </section>

      {/* Seção de Liderança - Destaque especial */}
      <LeadershipSection />

      {/* Seção de Consultoria - Foco técnico Protheus */}
      <ConsultingSection />

      {/* Seção de Treinamentos */}
      <TrainingSection />

      {/* Seção de Blog - Notícias e atualizações */}
      <section id="blog">
        <BlogSection />
      </section>

      {/* Seção de Contato - CTA final */}
      <section id="contact">
        <ContactSection />
      </section>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
