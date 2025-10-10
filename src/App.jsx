import './App.css';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import ConsultingSection from './components/ConsultingSection';
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
 * 1. Hero Section - Seção principal com CTA
 * 2. Solutions Section - 3 pilares (Tecnologia, Processos, Liderança)
 * 3. Consulting Section - Detalhes técnicos do Protheus
 * 4. Success Cases Section - Métricas e casos de sucesso
 * 5. Training Section - Treinamentos e certificações
 * 6. Blog Section - Últimas notícias do Protheus
 * 7. Testimonials Section - Depoimentos de clientes
 * 8. Contact Section - Formulário de contato e CTA final
 * 9. Footer - Links e informações da empresa
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* Seção Hero - Destaque principal */}
      <HeroSection />

      {/* Seção de Soluções - 3 Pilares */}
      <SolutionsSection />

      {/* Seção de Consultoria - Foco técnico Protheus */}
      <ConsultingSection />

      {/* Seção de Casos de Sucesso - Prova social com dados */}
      <SuccessCasesSection />

      {/* Seção de Treinamentos */}
      <TrainingSection />

      {/* Seção de Blog - Notícias e atualizações */}
      <BlogSection />

      {/* Seção de Depoimentos - Prova social pessoal */}
      <TestimonialsSection />

      {/* Seção de Contato - CTA final */}
      <ContactSection />

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
