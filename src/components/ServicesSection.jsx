import React from 'react';
import { Star, RefreshCw, Network, Workflow, GraduationCap, Bot } from 'lucide-react';

const SERVICES = [
  {
    icon: RefreshCw,
    title: 'Automação de processos',
    text: 'Rotinas, integrações e fluxos automáticos que tiram trabalho repetitivo da equipe.',
  },
  {
    icon: Network,
    title: 'Integração de sistemas',
    text: 'Protheus conversando com CRM, e-commerce, BI e outros ERPs, sem retrabalho manual.',
  },
  {
    icon: Workflow,
    title: 'Otimização de workflows',
    text: 'Mapeamos gargalos e redesenhamos processos com melhorias que dá para medir.',
  },
  {
    icon: GraduationCap,
    title: 'Treinamento e capacitação',
    text: 'Treinamentos práticos sobre a sua operação real, para a equipe dominar o sistema.',
  },
];

export default function ServicesSection() {
  return (
    <section className="band services" id="servicos">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Serviços</span>
          <h2>O que fazemos pelo seu Protheus</h2>
          <p>Configuramos o sistema para atender a sua operação, não o contrário.</p>
        </div>
        <div className="grid3">
          <article className="card feat">
            <div className="ico"><Star size={24} /></div>
            <h3>Consultoria Protheus especializada</h3>
            <p>
              Implementação, customização e otimização do seu Protheus. Sustentação do dia a dia
              com quem conhece a sua base e evolução contínua do que já funciona.
            </p>
            <div className="chips">
              <span className="chip chip-soft">Sustentação</span>
              <span className="chip chip-soft">Customização</span>
              <span className="chip chip-soft">Upgrade de release</span>
            </div>
          </article>
          {SERVICES.map(({ icon: Icon, title, text }) => (
            <article className="card" key={title}>
              <div className="ico"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
          <article className="card feat wide">
            <div className="ico"><Bot size={24} /></div>
            <h3>Agentes de IA e automação</h3>
            <p>
              Agentes de IA e fluxos com n8n para buscas, análises e rotinas que antes eram manuais,
              integrados ao seu Protheus.
            </p>
            <div className="chips">
              <span className="chip chip-soft">Agentes de IA</span>
              <span className="chip chip-soft">n8n</span>
              <span className="chip chip-soft">Buscas inteligentes</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
