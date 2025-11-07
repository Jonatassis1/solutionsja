import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Rocket, RefreshCw } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Diagnóstico',
      description: 'Analisamos seus processos, sistemas e necessidades específicas',
      duration: '1-2 semanas',
    },
    {
      number: '02',
      icon: FileText,
      title: 'Planejamento',
      description: 'Desenhamos a solução ideal com roadmap claro e métricas de sucesso',
      duration: '1 semana',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Implementação',
      description: 'Executamos com metodologia ágil, entregas incrementais e testes rigorosos',
      duration: '4-8 semanas',
    },
    {
      number: '04',
      icon: RefreshCw,
      title: 'Evolução Contínua',
      description: 'Monitoramento, ajustes e melhorias constantes para máximo resultado',
      duration: 'Contínuo',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Da Análise à Transformação
            <br />
            <span className="bg-gradient-to-r from-[#4F6FC9] to-[#6366F1] text-transparent bg-clip-text">
              em 4 Etapas
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Metodologia comprovada para entregar resultados rápidos e sustentáveis
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#4F6FC9]/30 hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="text-6xl font-bold text-gray-100 group-hover:text-[#4F6FC9]/10 transition-colors">
                          {step.number}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#4F6FC9] to-[#6366F1] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {step.description}
                        </p>

                        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#4F6FC9]">
                          <div className="w-2 h-2 bg-[#4F6FC9] rounded-full animate-pulse" />
                          {step.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                        className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-full flex items-center justify-center shadow-lg"
                      >
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
