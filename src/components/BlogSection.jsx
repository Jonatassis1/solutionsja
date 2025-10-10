import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

/**
 * Componente Blog Section
 * Seção de blog com as últimas notícias sobre Protheus, legislação e atualizações
 * Exibe os 3 artigos mais recentes
 */
export default function BlogSection() {
  // Artigos do blog (simulados - em produção viriam de uma API)
  const articles = [
    {
      title: 'Nova Nota Técnica NT2024.003: Mudanças no eSocial',
      category: 'Legislação',
      date: '15 de Março, 2024',
      excerpt:
        'Entenda as principais mudanças da nova nota técnica do eSocial e como adequar seu Protheus para garantir conformidade total.',
      image: '📋',
      readTime: '5 min',
      categoryColor: '#FF8C00',
    },
    {
      title: 'Protheus 12.1.2310: Novidades e Melhorias de Performance',
      category: 'Atualizações',
      date: '10 de Março, 2024',
      excerpt:
        'A TOTVS lançou a versão 12.1.2310 do Protheus com melhorias significativas de performance e novos recursos. Veja o que mudou.',
      image: '🚀',
      readTime: '7 min',
      categoryColor: '#4A90E2',
    },
    {
      title: 'Como Otimizar Queries no Protheus: Guia Completo',
      category: 'Técnico',
      date: '5 de Março, 2024',
      excerpt:
        'Aprenda técnicas avançadas para otimizar queries no Protheus e reduzir drasticamente o tempo de processamento de rotinas críticas.',
      image: '⚡',
      readTime: '10 min',
      categoryColor: '#00D084',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8C00]/10 border border-[#FF8C00] mb-4">
            <Newspaper className="w-4 h-4 text-[#FF8C00]" />
            <span className="text-[#FF8C00] font-semibold text-sm">Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            O Alerta de Atualização
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Novidades do mundo do ERP TOTVS Protheus: mudanças na legislação, Notas
            Técnicas e atualizações do sistema
          </p>
        </motion.div>

        {/* Grid de artigos */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[#FF8C00] transition-all duration-300 group cursor-pointer"
            >
              {/* Imagem/Ícone do artigo */}
              <div className="bg-gradient-to-br from-[#003366] to-[#004080] h-48 flex items-center justify-center text-7xl">
                {article.image}
              </div>

              {/* Conteúdo do artigo */}
              <div className="p-6">
                {/* Categoria e tempo de leitura */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: `${article.categoryColor}22`,
                      color: article.categoryColor,
                    }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>

                {/* Título do artigo */}
                <h3 className="text-xl font-bold text-[#003366] mb-3 group-hover:text-[#FF8C00] transition-colors">
                  {article.title}
                </h3>

                {/* Data */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Link de leitura */}
                <div className="flex items-center gap-2 text-[#FF8C00] font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Ler mais</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA para ver todos os artigos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#003366] hover:text-[#FF8C00] font-bold transition-colors group"
          >
            <span>Ver todos os artigos</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
