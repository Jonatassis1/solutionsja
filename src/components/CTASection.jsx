import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import {
  EMAIL,
  WHATSAPP_DISPLAY,
  N8N_WEBHOOK_URL,
  whatsappUrl,
} from '../config';

const EMPTY = { name: '', email: '', phone: '', company: '', message: '' };

export default function CTASection() {
  const [formData, setFormData] = useState(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const sent = { ...formData };

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: sent.name,
          email: sent.email,
          phone: sent.phone,
          company: sent.company || 'Não informada',
          message: sent.message || 'Gostaria de mais informações',
          timestamp: new Date().toISOString(),
          source: 'Website SolutionsJá - Formulário de Contato',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(EMPTY);
        setTimeout(() => {
          const msg = `Olá! Bem vindo ao site SolutionsJá.\n\n*Nome:* ${sent.name}\n*Email:* ${sent.email}\n*Telefone:* ${sent.phone}\n*Empresa:* ${sent.company || 'Não informada'}\n*Mensagem:* ${sent.message || 'Gostaria de mais informações'}`;
          window.open(whatsappUrl(msg), '_blank');
        }, 1000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  return (
    <section className="band cta" id="contato">
      <div className="wrap cta-grid">
        <div className="cta-copy">
          <h2>Vamos colocar o seu Protheus para trabalhar a seu favor?</h2>
          <p>Conte o desafio. A primeira conversa é sem compromisso.</p>
          <a
            className="btn btn-navy"
            href={whatsappUrl('Olá! Gostaria de agendar uma conversa para entender como a SolutionsJá pode ajudar minha empresa.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversar no WhatsApp
          </a>
          <p className="contact-line"><Phone size={18} /> {WHATSAPP_DISPLAY}</p>
          <p className="contact-line"><Mail size={18} /> {EMAIL}</p>
        </div>

        <form className="card cform" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome *
            <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Seu nome" autoComplete="name" />
          </label>
          <div className="two">
            <label htmlFor="email">
              E-mail *
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="seu@email.com" autoComplete="email" />
            </label>
            <label htmlFor="phone">
              WhatsApp *
              <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="(49) 9 0000-0000" autoComplete="tel" />
            </label>
          </div>
          <label htmlFor="company">
            Empresa
            <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} placeholder="Nome da empresa" autoComplete="organization" />
          </label>
          <label htmlFor="message">
            Mensagem
            <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Conte o desafio em poucas linhas" />
          </label>

          {submitStatus === 'success' && (
            <p className="form-ok" role="status">Mensagem enviada. Abrindo o WhatsApp para continuarmos a conversa.</p>
          )}
          {submitStatus === 'error' && (
            <p className="form-err" role="alert">Não foi possível enviar agora. Tente de novo ou chame direto no WhatsApp.</p>
          )}

          <button className="btn btn-action" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (<><span className="spin" /> Enviando...</>) : 'Enviar →'}
          </button>
          <p className="form-note">Usamos seus dados só para responder ao seu contato.</p>
        </form>
      </div>
    </section>
  );
}
