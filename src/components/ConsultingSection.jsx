import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Clock } from 'lucide-react';

export default function ConsultingSection() {
  const benefits = [
    {
      icon: Shield,
      title: 'Conformidade',
      description: 'Adequação completa ao eSocial, Reinf e legislação vigente',
    },
    {
      icon: TrendingUp,
      title: 'Performance',
      description: 'Otimização contínua para máxima eficiência operacional',
    },
    {
      icon: Clock,
      title: 'Suporte 24/7',
      description: 'Equipe especializada disponível quando você precisar',
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Protheus no seu máximo potencial
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Garantimos a operação e evolução do seu ERP com suporte especializado e soluções sob medida
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
