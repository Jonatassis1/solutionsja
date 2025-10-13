import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

/**
 * Componente Contact Section
 * Seção final de contato com formulário para diagnóstico rápido
 * Inclui CTA final e informações de contato
 */
export default function ContactSection() {
  // Estado do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  // Handler para mudanças nos campos
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler para envio via WhatsApp
  const handleWhatsAppContact = () => {
    const phone = '5511999999999';
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre as soluções da SolutionsJá.\n\nNome: ${formData.name}\nEmpresa: ${formData.company}\nMensagem: ${formData.message}`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  // Handler para envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    handleWhatsAppContact();
  };

  // Informações de contato
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '+55 (11) 9999-9999',
      color: '#FF8C00',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@solutionsja.com.br',
      color: '#4A90E2',
    },
    {
      icon: MapPin,
      title: 'Localização',
      value: 'São Paulo, SP - Brasil',
      color: '#00D084',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#003366] via-[#004080] to-[#002244] text-white">
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
            Não Espere pelos seus Resultados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Preencha o formulário abaixo para um diagnóstico rápido do seu Protheus e
            Infraestrutura. Nossa equipe entrará em contato em até 24 horas.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6">
              Diagnóstico Rápido Protheus e Infraestrutura
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 focus:border-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/50 text-white placeholder-gray-400 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 focus:border-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/50 text-white placeholder-gray-400 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 focus:border-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/50 text-white placeholder-gray-400 transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Empresa */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 focus:border-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/50 text-white placeholder-gray-400 transition-all"
                  placeholder="Nome da sua empresa"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Descreva seu desafio com o Protheus
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 focus:border-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/50 text-white placeholder-gray-400 transition-all resize-none"
                  placeholder="Conte-nos sobre seus principais desafios..."
                />
              </div>

              {/* Botão de envio */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg py-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                FALE CONOSCO NO WHATSAPP
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-sm text-gray-300 mt-2">
                Resposta garantida em até 24 horas
              </p>
            </form>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Destaque */}
            <div className="bg-[#FF8C00]/20 border-2 border-[#FF8C00] rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Por que escolher a SolutionsJá?</h3>
              <ul className="space-y-3">
                {[
                  'Resposta em até 24 horas',
                  'Especialistas certificados em Protheus',
                  'Suporte técnico 24/7',
                  'Diagnóstico gratuito',
                  'Soluções personalizadas',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FF8C00]" />
                    <span className="text-gray-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Informações de contato */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex items-center gap-4 hover:border-[#FF8C00] transition-all duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${info.color}33` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      <p className="font-semibold text-white">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
