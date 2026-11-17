export const WHATSAPP_NUMBER = '5549999983886';
export const WHATSAPP_DISPLAY = '+55 (49) 9 9998-3886';
export const EMAIL = 'contato@solutionsja.com.br';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/110854126/';
export const N8N_WEBHOOK_URL =
  'https://begin-n8n.iyoa3i.easypanel.host/webhook/db2c3332-abf9-4593-ac66-07e81c9752d2';

export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da SolutionsJá e gostaria de conversar sobre o meu Protheus.';
