import React from 'react';
import { whatsappUrl } from '../config';

const ROWS = [
  { nota: '000.481', cfop: '5102', base: '12.480,00', icms: '2.121,60', ok: true },
  { nota: '000.482', cfop: '5405', base: '3.920,50', icms: '0,00', ok: true },
  { nota: '000.483', cfop: '6102', base: '8.115,00', icms: '973,80', ok: false },
  { nota: '000.484', cfop: '5102', base: '1.050,00', icms: '178,50', ok: true },
];

export default function CustomToolsSection() {
  return (
    <section className="custom" id="sob-medida">
      <div className="wrap custom-grid">
        <div className="custom-copy">
          <span className="chip chip-glass"><span className="dot" />Sob medida</span>
          <h2>Ferramentas para o seu Protheus, feitas para a sua regra</h2>
          <p>
            Quando o padrão não resolve, desenvolvemos a ferramenta dentro do seu ERP: mesma base,
            mesmos usuários, sem planilha paralela.
          </p>
          <ul>
            <li>Conferência fiscal de notas antes da apuração, já pensando em IBS/CBS</li>
            <li>Integrações com bancos, e-commerce, BI e outros sistemas</li>
            <li>Painéis e rotinas automáticas para financeiro, faturamento e compras</li>
          </ul>
          <a
            className="btn btn-action"
            href={whatsappUrl('Olá! Tenho uma necessidade específica no Protheus e queria ver se dá para resolver com uma ferramenta sob medida.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contar minha necessidade →
          </a>
        </div>
        <div className="big" aria-label="Tela ilustrativa de conferência fiscal">
          <div className="mock-bar"><i /><i /><i /></div>
          <div className="tbl">
            <table>
              <thead>
                <tr><th>Nota</th><th>CFOP</th><th>Base</th><th>ICMS</th><th>Situação</th></tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.nota}>
                    <td>{r.nota}</td>
                    <td>{r.cfop}</td>
                    <td className="n">{r.base}</td>
                    <td className="n">{r.icms}</td>
                    <td>{r.ok ? <span className="ok">Conferida</span> : <span className="warn">Alíquota divergente</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <span className="tag-ilus">dados ilustrativos</span>
        </div>
      </div>
    </section>
  );
}
