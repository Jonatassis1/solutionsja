import React from 'react';
import { motion } from 'framer-motion';
import { Server, GitBranch, Users } from 'lucide-react';

/**
 * Componente Solutions Section
 * Apresenta os 3 pilares da SolutionsJá: Tecnologia, Processos e Liderança
 * Com destaque especial para a área de Tecnologia (Protheus)
 */
export default function SolutionsSection() {
  // Dados dos pilares de solução
  const solutions = [
    {
      icon: Server,
      title: 'SOLUTIONSJÁ TECHNOLOGY',
      highlight: true, // Destaque máximo para tecnologia
      description:
        'Suporte de alto nível, customização e evolução do ERP Protheus. Implementação de Infraestrutura e BI para decisões baseadas em dados.',
      features: [
        'Suporte técnico especializado 24/7',
        'Customizações complexas no Protheus',
        'Infraestrutura robusta e escalável',
        'Business Intelligence integrado',
      ],
      color: '#FF8C00',
    },
    {
      icon: GitBranch,
      title: 'PROCESSOS PRODUTIVOS OTIMIZADOS',
      highlight: false,
      description:
        'Mapeamento e automação de workflows que se integram perfeitamente com os módulos do Protheus.',
      features: [
        'Mapeamento de processos',
        'Automação de workflows',
        'Integração com módulos Protheus',
        'Redução de custos operacionais',
      ],
      color: '#4A90E2',
    },
    {
      icon: Users,
      title: 'LIDERANÇA ESTRATÉGICA',
      highlight: false,
      description:
        'Desenvolvimento de liderança para gerenciar equipes de tecnologia e utilizar dados do Protheus e BI de forma eficaz.',
      features: [
        'Treinamento de líderes',
        'Gestão de equipes tech',
        'Tomada de decisão baseada em dados',
        'Cultura de inovação',
      ],
      color: '#00D084',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            Soluções Completas para seu Negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Três pilares integrados para transformar sua operação e maximizar resultados
          </p>
        </motion.div>

        {/* Grid de soluções */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: solution.highlight ? 1.05 : 1.02 }}
                className={`
                  relative p-8 rounded-xl shadow-lg transition-all duration-300 group
                  ${
                    solution.highlight
                      ? 'bg-gradient-to-br from-[#003366] to-[#004080] border-4 border-[#FF8C00] md:scale-110'
                      : 'bg-white border border-gray-200'
                  }
                `}
              >
                {/* Badge de destaque */}
                {solution.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FF8C00] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      DESTAQUE
                    </span>
                  </div>
                )}

                {/* Ícone com animação */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`
                    w-16 h-16 rounded-lg flex items-center justify-center mb-6
                    ${solution.highlight ? 'bg-[#FF8C00]' : 'bg-gray-100'}
                  `}
                  style={{
                    backgroundColor: solution.highlight ? solution.color : undefined,
                  }}
                >
                  <Icon
                    className={`w-8 h-8 ${solution.highlight ? 'text-white' : 'text-[#003366]'}`}
                  />
                </motion.div>

                {/* Título */}
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    solution.highlight ? 'text-white' : 'text-[#003366]'
                  }`}
                >
                  {solution.title}
                </h3>

                {/* Descrição */}
                <p
                  className={`mb-6 leading-relaxed ${
                    solution.highlight ? 'text-gray-200' : 'text-gray-600'
                  }`}
                >
                  {solution.description}
                </p>

                {/* Lista de features */}
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                      className={`flex items-start gap-2 ${
                        solution.highlight ? 'text-gray-200' : 'text-gray-700'
                      }`}
                    >
                      <span
                        className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: solution.color }}
                      />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Efeito de brilho no hover para o card destacado */}
                {solution.highlight && (
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${solution.color}22 0%, transparent 70%)`,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
