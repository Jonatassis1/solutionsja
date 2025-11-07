import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Zap, Handshake } from 'lucide-react';

export default function WhySection() {
  const reasons = [
    {
      icon: Award,
      title: 'Experiência Comprovada',
      description: 'Anos de expertise em Protheus com projetos em diversos segmentos',
    },
    {
      icon: TrendingUp,
      title: 'Foco em ROI',
      description: 'Cada implementação pensada no retorno com métricas claras de sucesso',
    },
    {
      icon: Zap,
      title: 'Metodologia Ágil',
      description: 'Entregas rápidas e iterativas. Você vê resultados desde a primeira semana',
    },
    {
      icon: Handshake,
      title: 'Suporte Estratégico',
      description: 'Não apenas técnico, mas parceiro de negócio com consultoria contínua',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900 via-[#1E40AF] to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Consultoria que Entende
            <br />
            <span className="bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-transparent bg-clip-text">
              seu Negócio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Não somos apenas fornecedores, somos parceiros estratégicos na sua transformação digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#06B6D4] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
