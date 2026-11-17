import React from 'react';
import { whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '../config';

export default function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="chip chip-glass"><span className="dot" />Consultoria Protheus · Itajaí/SC</span>
          <h1>Protheus. Automação. <em>Resultados.</em></h1>
          <p>
            Seu ERP configurado para a sua operação. Você fala direto com quem executa,
            do diagnóstico à sustentação.
          </p>
          <div className="hero-ctas">
            <a
              className="btn btn-action"
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp →
            </a>
            <a className="btn btn-ghost" href="#processo">Como trabalhamos</a>
          </div>
        </div>

        <div className="stage" aria-hidden="true">
          <div className="mock m1">
            <div className="mock-bar"><i /><i /><i /></div>
            <div className="mock-body">
              <span className="mock-title">Painel de faturamento</span>
              <div className="kpis">
                <div className="kpi"><b>1.284</b><small>NF-e no mês</small></div>
                <div className="kpi"><b>99,2%</b><small>autorizadas</small></div>
                <div className="kpi"><b>3</b><small>rejeições</small></div>
              </div>
              <div className="bars">
                {[40, 55, 48, 70, 62].map((h) => <span key={h} style={{ height: `${h}%` }} />)}
                <span className="hl" style={{ height: '88%' }} />
              </div>
            </div>
            <span className="tag-ilus">ilustrativo</span>
          </div>
          <div className="mock m2">
            <div className="mock-bar"><i /><i /><i /></div>
            <div className="mock-body">
              <span className="mock-title">Diagnóstico</span>
              <div className="mrow">Cadastro de TES <span className="ok">OK</span></div>
              <div className="mrow">Regras fiscais <span className="warn">Revisar</span></div>
              <div className="mrow">Integrações <span className="ok">OK</span></div>
            </div>
          </div>
          <div className="mock m3">
            <div className="wa-head">SolutionsJá</div>
            <div className="wa-body">
              <div className="bub me">Nossa nota está rejeitando na SEFAZ</div>
              <div className="bub">Já estou olhando. Me manda o código da rejeição?</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
