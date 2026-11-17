import React from 'react';

const MODULES = ['Fiscal', 'Faturamento', 'Financeiro', 'Compras', 'Estoque', 'Contabilidade'];

export default function ModulesStrip() {
  return (
    <div className="mods" aria-label="Módulos Protheus">
      <div className="wrap">
        <span className="lbl">Módulos que dominamos</span>
        {MODULES.map((m) => <span key={m} className="chip chip-soft">{m}</span>)}
      </div>
    </div>
  );
}
