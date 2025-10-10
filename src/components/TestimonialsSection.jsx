import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

/**
 * Componente Testimonials Section
 * Seção de depoimentos de clientes satisfeitos
 * Destaca a velocidade, expertise em Protheus e qualidade do suporte
 */
export default function TestimonialsSection() {
  // Depoimentos de clientes
  const testimonials = [
    {
      name: 'Carlos Mendes',
      role: 'Diretor de TI',
      company: 'Grupo Industrial XYZ',
      photo: '👨‍💼',
      rating: 5,
      text: 'A SolutionsJá transformou completamente nossa operação no Protheus. A velocidade de resposta e a expertise técnica são incomparáveis. Reduzimos nosso tempo de fechamento fiscal em 35% e eliminamos todos os problemas de conformidade.',
      highlight: 'Velocidade e Expertise',
    },
    {
      name: 'Ana Paula Silva',
      role: 'Gerente Financeira',
      company: 'Distribuidora Nacional',
      photo: '👩‍💼',
      rating: 5,
      text: 'O suporte da SolutionsJá é excepcional. Sempre que precisamos, a equipe está disponível e resolve nossos problemas rapidamente. Os treinamentos em Protheus capacitaram nossa equipe a usar o sistema de forma muito mais eficiente.',
      highlight: 'Suporte Excepcional',
    },
    {
      name: 'Roberto Almeida',
      role: 'CEO',
      company: 'Varejo Tech Solutions',
      photo: '👨‍💻',
      rating: 5,
      text: 'Implementaram dashboards de BI integrados ao Protheus que revolucionaram nossa tomada de decisão. Agora temos dados em tempo real e conseguimos reagir rapidamente às mudanças do mercado. A mentoria de liderança também foi fundamental para nossa equipe.',
      highlight: 'Resultados Mensuráveis',
    },
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
            Quem Já Confia na SolutionsJá
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja o que nossos clientes dizem sobre nossa velocidade, expertise em Protheus
            e qualidade de suporte
          </p>
        </motion.div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-[#FF8C00] transition-all duration-300 relative"
            >
              {/* Ícone de aspas */}
              <div className="absolute -top-4 left-8">
                <div className="bg-[#FF8C00] w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Badge de destaque */}
              <div className="inline-block px-3 py-1 bg-[#FF8C00]/20 border border-[#FF8C00] rounded-full text-xs font-semibold text-[#FF8C00] mb-4 mt-6">
                {testimonial.highlight}
              </div>

              {/* Avaliação em estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00]"
                  />
                ))}
              </div>

              {/* Texto do depoimento */}
              <p className="text-gray-200 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Informações do cliente */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                <div className="text-4xl">{testimonial.photo}</div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estatística de satisfação */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-[#FF8C00] mb-2">98%</div>
                <div className="text-gray-300">Taxa de Satisfação</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#FF8C00] mb-2">150+</div>
                <div className="text-gray-300">Clientes Ativos</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#FF8C00] mb-2">4.9/5</div>
                <div className="text-gray-300">Avaliação Média</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
