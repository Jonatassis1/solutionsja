import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, ArrowRight } from 'lucide-react';

/**
 * Componente Training Section
 * Seção de treinamentos práticos em Protheus e desenvolvimento de liderança
 * Inclui CTA secundário para catálogo de cursos
 */
export default function TrainingSection() {
  // Categorias de treinamento
  const trainingCategories = [
    {
      icon: GraduationCap,
      title: 'Treinamento Protheus',
      description:
        'Cursos práticos focados em workflows reais do Protheus, garantindo que sua equipe utilize o sistema com máxima eficiência.',
      topics: [
        'Módulos Financeiro e Fiscal',
        'Gestão de Estoque e Compras',
        'Customizações e Relatórios',
        'Integração com BI',
      ],
      color: '#FF8C00',
    },
    {
      icon: BookOpen,
      title: 'Desenvolvimento de Liderança',
      description:
        'Módulos de liderança estratégica para gestores que precisam tomar decisões baseadas em dados do Protheus e BI.',
      topics: [
        'Liderança de Equipes Tech',
        'Tomada de Decisão com Dados',
        'Gestão de Mudanças',
        'Cultura de Inovação',
      ],
      color: '#4A90E2',
    },
    {
      icon: Award,
      title: 'Certificações',
      description:
        'Programas de certificação reconhecidos que comprovam a expertise da sua equipe em Protheus e gestão.',
      topics: [
        'Certificação Protheus Avançado',
        'Certificação em BI',
        'Certificação em Liderança',
        'Certificação em Processos',
      ],
      color: '#00D084',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Treinamento que Garante Maestria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cursos práticos online focados em workflows reais do Protheus, garantindo que
            sua equipe use o sistema com máxima eficiência, ao lado de módulos de
            desenvolvimento de liderança
          </p>
        </motion.div>

        {/* Grid de categorias de treinamento */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {trainingCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200 hover:border-[#FF8C00] transition-all duration-300 group"
              >
                {/* Ícone */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${category.color}22` }}
                >
                  <Icon className="w-8 h-8" style={{ color: category.color }} />
                </motion.div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-[#003366] mb-3">
                  {category.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Tópicos */}
                <ul className="space-y-2">
                  {category.topics.map((topic, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm">{topic}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Secundário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="inline-flex items-center bg-[#003366] hover:bg-[#004080] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
            ACESSE NOSSO CATÁLOGO DE CURSOS PROTHEUS
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Destaque de resultados */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-[#FF8C00]/10 to-[#FF8C00]/5 border-2 border-[#FF8C00] rounded-xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-[#FF8C00] mb-2">500+</div>
              <div className="text-gray-700 font-semibold">
                Profissionais Treinados
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF8C00] mb-2">95%</div>
              <div className="text-gray-700 font-semibold">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#FF8C00] mb-2">50+</div>
              <div className="text-gray-700 font-semibold">Cursos Disponíveis</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
