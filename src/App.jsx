import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import ConsultingSection from './components/ConsultingSection';
import LeadershipSection from './components/LeadershipSection';
import TrainingSection from './components/TrainingSection';
import BlogSection from './components/BlogSection';
import SuccessCasesSection from './components/SuccessCasesSection';
import TestimonialsSection from './components/TestimonialsSection';
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
 * 3. Consulting Section - Detalhes técnicos do Protheus
 * 4. Leadership Section - Desenvolvimento de liderança
 * 5. Success Cases Section - Métricas e casos de sucesso
 * 6. Training Section - Treinamentos e certificações
 * 7. Blog Section - Últimas notícias do Protheus
 * 8. Testimonials Section - Depoimentos de clientes
 * 9. Contact Section - Formulário de contato e CTA final
 * 10. Footer - Links e informações da empresa
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

      {/* Seção de Consultoria - Foco técnico Protheus */}
      <ConsultingSection />

      {/* Seção de Liderança - Destaque especial */}
      <LeadershipSection />

      {/* Seção de Casos de Sucesso - Prova social com dados */}
      <SuccessCasesSection />

      {/* Seção de Treinamentos */}
      <TrainingSection />

      {/* Seção de Blog - Notícias e atualizações */}
      <section id="blog">
        <BlogSection />
      </section>

      {/* Seção de Depoimentos - Prova social pessoal */}
      <TestimonialsSection />

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
