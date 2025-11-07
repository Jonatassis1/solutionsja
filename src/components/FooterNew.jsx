import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function FooterNew() {
  const footerLinks = {
    'Links Rápidos': [
      { name: 'Início', href: '#hero' },
      { name: 'Serviços', href: '#services' },
      { name: 'Contato', href: '#contact' },
    ],
    'Serviços': [
      { name: 'Consultoria Protheus', href: '#services' },
      { name: 'Automação de Processos', href: '#services' },
      { name: 'Integração de Sistemas', href: '#services' },
      { name: 'Treinamentos', href: '#services' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contato@solutionsja.com.br' },
    { icon: Phone, text: '+55 (49) 99998-3886' },
    { icon: MapPin, text: 'Itajaí, SC' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#1E40AF] to-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-transparent bg-clip-text">SolutionsJá</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              Consultoria especializada que automatiza processos, integra sistemas e transforma operações em resultados concretos.
            </p>

            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-white/70 text-sm">
                    <Icon className="w-4 h-4 text-[#10B981]" />
                    <span>{info.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
            >
              <h4 className="font-bold mb-4 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#10B981] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} SolutionsJá. Todos os direitos reservados.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#10B981] flex items-center justify-center transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-white/60 group-hover:text-[#10B981] transition-colors" />
                  </a>
                );
              })}
            </div>

            <div className="flex gap-4 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
