import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Zap } from 'lucide-react';

/**
 * Componente Hero Section
 * Seção principal da landing page com destaque para o título, subtítulo e CTA principal
 * Inclui animações e elementos visuais que simulam processamento de dados do Protheus
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#003366] via-[#004080] to-[#002244]">
      {/* Efeito de fundo animado simulando fluxo de dados */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: '-100%',
                width: '100%',
              }}
              animate={{
                left: ['0%', '100%'],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge animado */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8C00]/20 border border-[#FF8C00] mb-8"
          >
            <Zap className="w-4 h-4 text-[#FF8C00]" />
            <span className="text-[#FF8C00] font-semibold text-sm">
              Soluções Imediatas para seu Protheus
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            SEU ERP PROTHEUS NO{' '}
            <span className="text-[#FF8C00]">MÁXIMO POTENCIAL</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Consultoria de elite para suporte, evolução e otimização do ERP Protheus,
            complementada por Infraestrutura robusta, Business Intelligence e
            desenvolvimento de liderança.
          </motion.p>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#FF8C00] hover:bg-[#FF7700] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              FALE COM UM ESPECIALISTA PROTHEUS AGORA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Elemento visual interativo - Dashboard simulado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                {/* Métricas simuladas do Protheus */}
                {[
                  { label: 'Performance', value: '+70%', color: '#FF8C00' },
                  { label: 'Eficiência', value: '+35%', color: '#00D084' },
                  { label: 'Economia', value: '-40%', color: '#4A90E2' },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div
                      className="text-3xl font-bold mb-2"
                      style={{ color: metric.color }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-gray-300 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
