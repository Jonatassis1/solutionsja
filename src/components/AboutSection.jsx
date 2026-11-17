import React from 'react';
import { Linkedin } from 'lucide-react';
import { LINKEDIN_URL } from '../config';

const FACTS = ['Agentes de IA', 'Automações com n8n', 'Refatoração AdvPL/TLPP', 'Análise de processos', 'Buscas inteligentes'];

export default function AboutSection() {
  return (
    <section className="band" id="quem-somos">
      <div className="wrap about-grid">
        <figure className="photo">
          <img
            src="/img/protheus-ia.jpg"
            alt="Consultor trabalhando em código AdvPL e Protheus, com agentes de IA ligados a buscas, automações com n8n, refatoração e análise de processos"
            width="900"
            height="600"
            loading="lazy"
          />
          <figcaption><b>solutionsja.com.br</b>Protheus + IA no dia a dia</figcaption>
        </figure>
        <div className="about-copy">
          <span className="eyebrow">Quem somos</span>
          <h2>Experiência em Protheus, agora acelerada por IA</h2>
          <p>
            A SolutionsJá nasceu da experiência em gerência de TI e coordenação de desenvolvimento
            Protheus. Hoje usamos agentes de IA para analisar processos, refatorar código AdvPL/TLPP
            e automatizar rotinas, o que encurta prazos sem abrir mão da revisão de um especialista.
          </p>
          <p>
            Cada projeto tem um responsável sênior que entende o sistema e o negócio, e um time que
            cresce conforme a demanda.
          </p>
          <div className="facts">
            {FACTS.map((f) => <span key={f} className="chip chip-soft">{f}</span>)}
          </div>
          <a className="li" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} color="#0A66C2" /> SolutionsJá no LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
