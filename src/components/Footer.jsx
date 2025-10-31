import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Soluções: [
      { name: 'Consultoria Protheus', href: '#' },
      { name: 'Academia de Liderança', href: '#' },
    ],
    Recursos: [
      { name: 'Blog', href: '#' },
      { name: 'Casos de Sucesso', href: '#' },
    ],
    Empresa: [
      { name: 'Sobre Nós', href: '#' },
      { name: 'Contato', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-50 text-gray-900 pt-20 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">SolutionsJá</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Consultoria especializada em ERP Protheus e desenvolvimento de líderes de alta performance.
            </p>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-bold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
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
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} SolutionsJá. Todos os direitos reservados.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-gray-700" />
                  </a>
                );
              })}
            </div>

            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacidade
              </a>
              <span className="text-gray-400">|</span>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
