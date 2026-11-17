import React from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '../config';

export default function WhatsAppFloat() {
  return (
    <a
      className="btn wa-float"
      href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={20} /> WhatsApp
    </a>
  );
}
