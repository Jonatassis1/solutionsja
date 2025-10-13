import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, BarChart3, Lightbulb, Award, ArrowRight } from 'lucide-react';

export default function LeadershipSection() {
  const leadershipBenefits = [
    {
      icon: Target,
      title: 'Visão Estratégica',
      description: 'Tomada de decisão baseada em dados do Protheus e BI',
      color: '#FF8C00',
    },
    {
      icon: Users,
      title: 'Gestão de Equipes',
      description: 'Liderança eficaz de times técnicos e operacionais',
      color: '#4A90E2',
    },
    {
      icon: TrendingUp,
      title: 'Crescimento',
      description: 'Desenvolvimento contínuo de competências',
      color: '#00D084',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Cultura de melhoria contínua e transformação',
      color: '#9B59B6',
    },
  ];

  const workflowSteps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: 'Análise do perfil de liderança atual e identificação de gaps',
      icon: BarChart3,
    },
    {
      number: '02',
      title: 'Planejamento',
      description: 'Desenvolvimento de plano personalizado de evolução',
      icon: Target,
    },
    {
      number: '03',
      title: 'Execução',
      description: 'Mentorias práticas e aplicação em projetos reais',
      icon: Users,
    },
    {
      number: '04',
      title: 'Resultados',
      description: 'Medição de impacto e certificação de competências',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#003366] via-[#004080] to-[#002244] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#FF8C00] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4A90E2] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8C00]/20 border border-[#FF8C00] mb-6">
            <Award className="w-5 h-5 text-[#FF8C00]" />
            <span className="text-[#FF8C00] font-semibold text-sm">
              Desenvolvimento de Liderança
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transforme Gestores em{' '}
            <span className="text-[#FF8C00]">Líderes de Alta Performance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Programa completo de mentoria e desenvolvimento para líderes que precisam extrair
            máximo valor do Protheus e tomar decisões estratégicas baseadas em dados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {leadershipBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-[#FF8C00] transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${benefit.color}22` }}
                >
                  <Icon className="w-8 h-8" style={{ color: benefit.color }} />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Nossa Metodologia de Desenvolvimento
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-[#FF8C00] transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl font-bold text-[#FF8C00]/20">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-[#FF8C00]/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#FF8C00]" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#FF8C00]/50"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#FF8C00]/20 to-[#FF8C00]/10 border-2 border-[#FF8C00] rounded-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Resultados Comprovados em Liderança
              </h3>
              <p className="text-gray-200 mb-6 text-lg">
                Nosso programa já transformou centenas de gestores em líderes estratégicos,
                com impacto direto nos resultados das empresas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-4xl font-bold text-[#FF8C00] mb-1">200+</div>
                  <div className="text-sm text-gray-300">Líderes Treinados</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF8C00] mb-1">95%</div>
                  <div className="text-sm text-gray-300">Taxa de Sucesso</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF8C00] mb-1">+40%</div>
                  <div className="text-sm text-gray-300">Aumento em Produtividade</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#FF8C00] mb-1">6 meses</div>
                  <div className="text-sm text-gray-300">Tempo Médio de ROI</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#FF8C00]" />
                  Mentoria Executiva
                </h4>
                <p className="text-sm text-gray-300">
                  Acompanhamento individual com especialistas em gestão e Protheus
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#FF8C00]" />
                  Decisões Baseadas em Dados
                </h4>
                <p className="text-sm text-gray-300">
                  Aprenda a usar dashboards e KPIs do Protheus para tomada de decisão
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#FF8C00]" />
                  Certificação em Liderança
                </h4>
                <p className="text-sm text-gray-300">
                  Reconhecimento oficial das competências desenvolvidas
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center bg-[#FF8C00] hover:bg-[#FF7700] text-white font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group">
              DESENVOLVA SUA LIDERANÇA AGORA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
