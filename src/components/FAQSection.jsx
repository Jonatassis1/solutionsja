import React from 'react';

const FAQ = [
  {
    q: 'Vocês atendem de forma remota?',
    a: 'Sim. A maior parte do trabalho é remota, com visitas presenciais quando o projeto pede.',
  },
  {
    q: 'Com quais versões do Protheus vocês trabalham?',
    a: 'Releases 12.1.x atuais, incluindo planejamento e execução de upgrade de release.',
  },
  {
    q: 'Como a IA entra no trabalho?',
    a: 'Usamos agentes de IA para acelerar análise, documentação, refatoração e testes. Todo código e toda entrega passam pela revisão de um especialista antes de chegar ao seu ambiente.',
  },
  {
    q: 'Vocês desenvolvem ferramentas específicas para a minha empresa?',
    a: 'Sim. Quando o padrão do Protheus não atende, desenvolvemos rotinas, integrações e painéis sob medida, dentro do próprio ERP.',
  },
];

export default function FAQSection() {
  return (
    <section className="band" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2>Antes de conversar</h2>
        </div>
        <div className="faq-list">
          {FAQ.map((item, idx) => (
            <details key={item.q} open={idx === 0}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
