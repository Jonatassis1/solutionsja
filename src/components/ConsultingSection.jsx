import { motion } from 'framer-motion';
import {
  DollarSign,
  FileCheck,
  Settings,
  TrendingDown,
  Shield,
  Zap,
} from 'lucide-react';

/**
 * Componente Consulting Section
 * Seção detalhada sobre consultoria e suporte técnico no Protheus
 * Destaca os principais módulos e benefícios fiscais/operacionais
 */
export default function ConsultingSection() {
  // Benefícios principais
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Redução de Custos Operacionais',
      description: 'Otimização de processos que reduzem despesas em até 40%',
    },
    {
      icon: Shield,
      title: 'Conformidade Fiscal',
      description: 'Adequação completa ao eSocial, Reinf e Notas Técnicas',
    },
    {
      icon: Zap,
      title: 'Otimização de Módulos',
      description: 'Financeiro, Estoque e Faturamento funcionando no máximo',
    },
  ];

  // Módulos do Protheus suportados
  const modules = [
    { name: 'Financeiro', icon: DollarSign, color: '#FF8C00' },
    { name: 'Estoque', icon: Settings, color: '#4A90E2' },
    { name: 'Faturamento', icon: FileCheck, color: '#00D084' },
    { name: 'Fiscal', icon: Shield, color: '#9B59B6' },
    { name: 'Compras', icon: TrendingDown, color: '#E74C3C' },
    { name: 'Contábil', icon: FileCheck, color: '#F39C12' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#003366] to-[#002244] text-white">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluções Fiscais, Financeiras e Operacionais no Protheus
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Garantimos a operação e evolução do seu ERP Protheus, lidando com suporte,
            atualizações e customizações complexas
          </p>
        </motion.div>

        {/* Grid de benefícios */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-[#FF8C00] transition-all duration-300"
              >
                <div className="bg-[#FF8C00] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Módulos do Protheus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Principais Módulos do Protheus que Dominamos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 hover:border-[#FF8C00] transition-all duration-300 text-center group"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 transition-all duration-300"
                    style={{ backgroundColor: `${module.color}33` }}
                  >
                    <Icon
                      className="w-6 h-6 transition-all duration-300"
                      style={{ color: module.color }}
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                    {module.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Destaque para conformidade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto bg-[#FF8C00]/20 border-2 border-[#FF8C00] rounded-xl p-8 text-center"
        >
          <Shield className="w-16 h-16 text-[#FF8C00] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">
            Conformidade Fiscal Garantida
          </h3>
          <p className="text-gray-200 text-lg">
            Mantemos seu Protheus sempre atualizado com as últimas exigências do
            <strong> eSocial</strong>, <strong>Reinf</strong> e{' '}
            <strong>Notas Técnicas</strong>, garantindo que sua empresa esteja sempre em
            conformidade com a legislação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
