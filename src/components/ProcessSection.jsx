import React from 'react';

const STEPS = [
  { title: 'Diagnóstico', text: 'Analisamos processos, sistemas e necessidades.' },
  { title: 'Planejamento', text: 'Roteiro claro e métricas de sucesso definidas.' },
  { title: 'Implementação', text: 'Entregas incrementais com testes em base de homologação.' },
  { title: 'Evolução', text: 'Monitoramento, ajustes e melhorias constantes.' },
];

export default function ProcessSection() {
  return (
    <section className="band process" id="processo">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Como trabalhamos</span>
          <h2>Do diagnóstico à evolução contínua</h2>
        </div>
        <ol className="steps" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {STEPS.map((s, idx) => (
            <li className="step" key={s.title}>
              <span className="num">{String(idx + 1).padStart(2, '0')}</span>
              <div className="card">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
