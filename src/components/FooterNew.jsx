import React from 'react';
import { EMAIL, WHATSAPP_DISPLAY, LINKEDIN_URL } from '../config';

export default function FooterNew() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <a className="logo" href="#inicio">Solutions<span>Já</span></a>
          <p style={{ marginTop: 12 }}>Consultoria Protheus em Itajaí/SC.</p>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#quem-somos">Quem somos</a></li>
            <li><a href="#processo">Processo</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Serviços</h4>
          <ul>
            <li><a href="#servicos">Consultoria Protheus</a></li>
            <li><a href="#servicos">Automação e IA</a></li>
            <li><a href="#servicos">Integração de sistemas</a></li>
            <li><a href="#sob-medida">Ferramentas sob medida</a></li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li>{WHATSAPP_DISPLAY}</li>
            <li>{EMAIL}</li>
            <li>Itajaí/SC</li>
            <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="wrap">
          <span>© {year} SolutionsJá. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
