import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '../config';

const NAV = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#quem-somos', label: 'Quem somos' },
  { href: '#processo', label: 'Processo' },
  { href: '#sob-medida', label: 'Sob medida' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="top">
      <div className="wrap">
        <div className="top-row">
          <a className="logo" href="#inicio" onClick={() => setOpen(false)}>
            Solutions<span>Já</span>
          </a>
          <nav className="nav-links" aria-label="Seções">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="top-actions">
            <a
              className="btn btn-action btn-desktop"
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Seções">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
