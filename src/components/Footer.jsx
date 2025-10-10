import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

/**
 * Componente Footer
 * Rodapé da landing page com links, redes sociais e informações da empresa
 */
export default function Footer() {
  // Links do footer organizados por categoria
  const footerLinks = {
    Soluções: [
      { name: 'Protheus ERP', href: '#' },
      { name: 'Infraestrutura', href: '#' },
      { name: 'Business Intelligence', href: '#' },
      { name: 'Processos', href: '#' },
      { name: 'Liderança', href: '#' },
    ],
    Serviços: [
      { name: 'Consultoria', href: '#' },
      { name: 'Suporte 24/7', href: '#' },
      { name: 'Treinamentos', href: '#' },
      { name: 'Customizações', href: '#' },
      { name: 'Diagnóstico', href: '#' },
    ],
    Recursos: [
      { name: 'Blog', href: '#' },
      { name: 'Casos de Sucesso', href: '#' },
      { name: 'Documentação', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
    Empresa: [
      { name: 'Sobre Nós', href: '#' },
      { name: 'Equipe', href: '#' },
      { name: 'Carreiras', href: '#' },
      { name: 'Contato', href: '#' },
      { name: 'Parceiros', href: '#' },
    ],
  };

  // Redes sociais
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0077B5' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
  ];

  return (
    <footer className="bg-[#001a33] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Seção principal do footer */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Coluna da marca */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-bold text-[#FF8C00] mb-4">SolutionsJá</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Protheus. Leadership. Results. Now.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              A consultoria que entrega soluções estratégicas e tecnológicas imediatas
              para otimizar seu ERP Protheus.
            </p>
          </motion.div>

          {/* Colunas de links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-lg font-bold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#FF8C00] transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="w-12 h-12 text-[#FF8C00] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Receba Atualizações do Mundo Protheus
            </h3>
            <p className="text-gray-400 mb-6">
              Inscreva-se para receber notícias sobre legislação, notas técnicas e dicas
              de otimização
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 focus:border-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/50 text-white placeholder-gray-400 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#FF8C00] hover:bg-[#FF7700] rounded-lg font-bold transition-all duration-300 hover:shadow-lg"
              >
                Inscrever
              </button>
            </form>
          </div>
        </motion.div>

        {/* Redes sociais e copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SolutionsJá. Todos os direitos reservados.
            </p>

            {/* Redes sociais */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#FF8C00] transition-colors" />
                  </motion.a>
                );
              })}
            </div>

            {/* Links legais */}
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FF8C00] transition-colors">
                Privacidade
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#FF8C00] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
