import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Lightbulb } from 'lucide-react';

export default function LeadershipSection() {
  const benefits = [
    {
      icon: Target,
      title: 'Visão Estratégica',
      description: 'Tomada de decisão fundamentada e orientada a resultados',
    },
    {
      icon: Users,
      title: 'Gestão de Equipes',
      description: 'Liderança eficaz e desenvolvimento de times de alto desempenho',
    },
    {
      icon: TrendingUp,
      title: 'Crescimento',
      description: 'Desenvolvimento contínuo de competências e habilidades',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Cultura de melhoria contínua e transformação organizacional',
    },
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Líderes de alta performance
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Desenvolvimento completo para transformar gestores em líderes estratégicos e preparados para desafios complexos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Icon className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
