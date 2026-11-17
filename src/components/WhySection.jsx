import React from 'react';

const ITEMS = [
  { title: 'Você fala com quem executa', text: 'Sem intermediários entre o seu problema e quem resolve.' },
  { title: 'Entregas desde a primeira semana', text: 'Ciclos curtos e incrementais, com algo funcionando cedo.' },
  { title: 'Métricas combinadas no início', text: 'O que conta como sucesso fica definido antes de começar.' },
  { title: 'Parceiro de negócio', text: 'Olhamos para o resultado da operação, além do chamado técnico.' },
];

export default function WhySection() {
  return (
    <section className="band why">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Por que a SolutionsJá</span>
          <h2>Compromissos que você pode cobrar</h2>
          <p>No lugar de promessas genéricas, regras de trabalho que valem em todo contrato.</p>
        </div>
        <div className="grid4">
          {ITEMS.map((i) => (
            <div className="glass" key={i.title}>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
