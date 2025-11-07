import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Network, Workflow, GraduationCap } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Settings,
      title: 'Consultoria Protheus Especializada',
      description: 'Implementação, customização e otimização do seu Protheus. Configuramos o sistema para atender suas necessidades específicas, não o contrário.',
      benefits: ['Implementação ágil', 'Customizações inteligentes', 'Suporte contínuo'],
      gradient: 'from-[#4F6FC9] to-[#6366F1]',
    },
    {
      icon: Zap,
      title: 'Automação de Processos',
      description: 'Elimine tarefas repetitivas e reduza erros. Automatizamos fluxos de trabalho, integrações e rotinas operacionais que consomem o tempo da sua equipe.',
      benefits: ['Menos erros humanos', 'Mais produtividade', 'Economia de tempo'],
      gradient: 'from-[#10B981] to-[#06B6D4]',
    },
    {
      icon: Network,
      title: 'Integração de Sistemas',
      description: 'Conectamos seu Protheus com outras ferramentas (ERP, CRM, e-commerce, BI). Dados fluindo perfeitamente entre sistemas.',
      benefits: ['Visão unificada', 'Dados sincronizados', 'Decisões mais rápidas'],
      gradient: 'from-[#6366F1] to-[#8B5CF6]',
    },
    {
      icon: Workflow,
      title: 'Otimização de Workflows',
      description: 'Analisamos e redesenhamos seus processos para máxima eficiência. Identificamos gargalos e implementamos melhorias mensuráveis.',
      benefits: ['Processos enxutos', 'Compliance garantido', 'Escalabilidade'],
      gradient: 'from-[#06B6D4] to-[#10B981]',
    },
    {
      icon: GraduationCap,
      title: 'Treinamento e Capacitação',
      description: 'Sua equipe dominando o Protheus. Treinamentos práticos focados na sua operação real, não teoria genérica.',
      benefits: ['Equipe autônoma', 'Adoção rápida', 'ROI acelerado'],
      gradient: 'from-[#8B5CF6] to-[#4F6FC9]',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Soluções que Impulsionam
            <br />
            <span className="bg-gradient-to-r from-[#4F6FC9] to-[#6366F1] text-transparent bg-clip-text">
              seu Negócio
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Transformamos processos complexos em sistemas que trabalham para você
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#4F6FC9] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
