import React from 'react';
import { motion } from 'framer-motion';
import { Server, Users } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Server,
      title: 'Consultoria Protheus',
      description:
        'Suporte especializado, customização e otimização do ERP Protheus para maximizar a eficiência operacional da sua empresa.',
      features: [
        'Suporte técnico especializado',
        'Customizações e integrações',
        'Otimização de performance',
        'Conformidade fiscal garantida',
      ],
    },
    {
      icon: Users,
      title: 'Academia de Liderança',
      description:
        'Desenvolvimento de líderes de alta performance com foco em gestão estratégica, tomada de decisão e cultura de inovação.',
      features: [
        'Programas de desenvolvimento',
        'Coaching executivo',
        'Liderança estratégica',
        'Gestão de equipes',
      ],
    },
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Soluções especializadas para transformar tecnologia e pessoas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-10 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#4F6FC9]/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4F6FC9] to-[#6b8adf] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                    {solution.description}
                  </p>

                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span className="w-1.5 h-1.5 bg-[#4F6FC9] rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
