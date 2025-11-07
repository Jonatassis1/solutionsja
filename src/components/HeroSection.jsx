import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E40AF] via-[#4F6FC9] to-[#6366F1]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="absolute top-20 right-20 w-72 h-72 bg-[#10B981] rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#6366F1] rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 py-32 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Zap className="w-4 h-4 text-[#10B981]" />
              <span className="text-white/90 text-sm font-medium">Protheus. Automação. Resultados.</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Protheus que Trabalha
              <br />
              <span className="bg-gradient-to-r from-[#10B981] to-[#06B6D4] text-transparent bg-clip-text">para Você</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            >
              Consultoria especializada que automatiza processos, integra sistemas e libera sua equipe para o que realmente importa: <span className="text-white font-medium">crescer</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:shadow-2xl hover:shadow-[#10B981]/50 text-white font-semibold text-lg px-10 py-5 rounded-xl transition-all duration-300 group transform hover:scale-105"
              >
                Fale com nosso especialista
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-10 py-5 rounded-xl border-2 border-white/30 transition-all duration-300"
              >
                Ver Nossos Serviços
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
