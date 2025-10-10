import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Download,
  ArrowRight,
} from 'lucide-react';

/**
 * Componente Success Cases Section
 * Apresenta métricas de resultados e casos de sucesso detalhados
 * Inclui painel de métricas destacadas e galeria de casos com CTA para download
 */
export default function SuccessCasesSection() {
  // Métricas principais (Featured Metrics Panel)
  const metrics = [
    {
      icon: Clock,
      value: '-35%',
      label: 'Redução no Tempo de Fechamento Fiscal/Contábil',
      color: '#FF8C00',
    },
    {
      icon: TrendingUp,
      value: '+70%',
      label: 'Aumento na Performance do Protheus/Infraestrutura',
      color: '#00D084',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Líderes/Colaboradores Treinados e Certificados',
      color: '#4A90E2',
    },
    {
      icon: DollarSign,
      value: '-40%',
      label: 'Economia em Custos Operacionais e Suporte',
      color: '#9B59B6',
    },
  ];

  // Casos de sucesso detalhados
  const cases = [
    {
      title: 'Conformidade Fiscal e Fechamento Acelerado',
      industry: 'Indústria Química',
      challenge:
        'Empresa enfrentava atrasos constantes no fechamento fiscal devido a processos manuais e falta de conformidade com notas técnicas.',
      solution:
        'Implementação de automações no Protheus, adequação ao eSocial/Reinf e treinamento da equipe contábil.',
      result: '-35% no tempo de fechamento',
      metrics: ['3 dias → 2 dias', 'Zero multas fiscais', '100% conformidade'],
      color: '#FF8C00',
    },
    {
      title: 'Dashboards BI e Mentoria de Liderança',
      industry: 'Varejo Multicanal',
      challenge:
        'Liderança tomava decisões sem dados confiáveis, resultando em perda de oportunidades e desperdício de recursos.',
      solution:
        'Implementação de dashboards BI integrados ao Protheus e programa de mentoria para líderes.',
      result: '+20% na velocidade de decisão',
      metrics: ['15 dashboards', '8 líderes treinados', 'ROI em 4 meses'],
      color: '#4A90E2',
    },
    {
      title: 'Aceleração do Protheus e Infraestrutura Robusta',
      industry: 'Distribuição Logística',
      challenge:
        'Rotinas críticas do Protheus demoravam horas, impactando operações e atendimento ao cliente.',
      solution:
        'Otimização de queries, upgrade de infraestrutura e implementação de cache inteligente.',
      result: '-70% no tempo de processamento',
      metrics: ['4h → 1h20min', '99.9% uptime', 'Zero downtime'],
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
            SOLUÇÕES COMPROVADAS. RESULTADOS QUANTIFICÁVEIS.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Números reais de projetos reais. Veja como transformamos operações e
            entregamos resultados mensuráveis.
          </p>
        </motion.div>

        {/* Painel de Métricas Destacadas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-[#FF8C00] transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${metric.color}22` }}
                >
                  <Icon className="w-6 h-6" style={{ color: metric.color }} />
                </div>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
                <div className="text-gray-700 font-semibold text-sm leading-tight">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Galeria de Casos Detalhados */}
        <div className="max-w-7xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#003366] text-center mb-12"
          >
            Casos de Sucesso Detalhados
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cases.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#FF8C00] transition-all duration-300"
              >
                {/* Badge da indústria */}
                <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-700 mb-4">
                  {caseItem.industry}
                </div>

                {/* Título */}
                <h4 className="text-xl font-bold text-[#003366] mb-4">
                  {caseItem.title}
                </h4>

                {/* Desafio */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Desafio
                  </p>
                  <p className="text-sm text-gray-600">{caseItem.challenge}</p>
                </div>

                {/* Solução */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Solução
                  </p>
                  <p className="text-sm text-gray-600">{caseItem.solution}</p>
                </div>

                {/* Resultado destacado */}
                <div
                  className="p-4 rounded-lg mb-4"
                  style={{ backgroundColor: `${caseItem.color}22` }}
                >
                  <p className="text-xs font-bold text-gray-700 uppercase mb-1">
                    Resultado
                  </p>
                  <p
                    className="text-2xl font-bold"
                    style={{ color: caseItem.color }}
                  >
                    {caseItem.result}
                  </p>
                </div>

                {/* Métricas adicionais */}
                <div className="space-y-2">
                  {caseItem.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: caseItem.color }}
                      />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA para download de case completo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <button className="inline-flex items-center bg-[#FF8C00] hover:bg-[#FF7700] text-white font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <Download className="mr-2 w-5 h-5" />
              BAIXE NOSSO CASE COMPLETO
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-600 mt-3">
              Receba estudos de caso detalhados e descubra como podemos ajudar sua empresa
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
