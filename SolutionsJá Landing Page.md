# SolutionsJá Landing Page

Este repositório contém o código-fonte da Landing Page da SolutionsJá, uma consultoria especializada em desenvolvimento de liderança, otimização de processos produtivos e automação de tecnologia, com foco em ERP Protheus, Infraestrutura e Business Intelligence (BI).

## Visão Geral do Projeto

A Landing Page foi desenvolvida para converter visitantes que necessitam de suporte e evolução em seu ambiente Protheus. Ela destaca a proposta de valor da SolutionsJá, seus pilares de atuação (Tecnologia, Processos e Liderança), casos de sucesso, treinamentos, depoimentos e um formulário de contato para diagnóstico rápido.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápido para projetos web modernos.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Framer Motion**: Biblioteca para animações fluidas e interativas.
- **Lucide React**: Biblioteca de ícones.
- **shadcn/ui**: Componentes de UI acessíveis e personalizáveis.

## Estrutura do Projeto

```
solutionsja-landing/
├── public/
├── src/
│   ├── assets/             # Ativos estáticos como imagens
│   ├── components/         # Componentes React da Landing Page
│   │   ├── BlogSection.jsx
│   │   ├── ConsultingSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── SolutionsSection.jsx
│   │   ├── SuccessCasesSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── TrainingSection.jsx
│   │   └── ui/             # Componentes de UI do shadcn/ui
│   ├── App.css             # Estilos globais e do Tailwind CSS
│   ├── App.jsx             # Componente principal da aplicação
│   └── main.jsx            # Ponto de entrada da aplicação
├── .gitignore              # Arquivos e pastas a serem ignorados pelo Git
├── index.html              # Arquivo HTML principal
├── package.json            # Dependências e scripts do projeto
├── pnpm-lock.yaml          # Arquivo de lock de dependências
└── vite.config.js          # Configuração do Vite
```

## Como Configurar e Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o Node.js (versão 18 ou superior) e o pnpm instalados em seu sistema.

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd solutionsja-landing
   ```

2. **Instale as dependências:**

   ```bash
   pnpm install
   ```

### Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento e visualizar a Landing Page em seu navegador:

```bash
pnpm run dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível).

### Build para Produção

Para gerar uma versão otimizada para produção:

```bash
pnpm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## Cores da Marca

As cores principais da marca SolutionsJá, conforme o prompt, são:

- **Azul Escuro/Marinho (Primary)**: `#003366` (Profissionalismo)
- **Laranja Vibrante (Secondary)**: `#FF8C00` ou `#FFAA00` (Ação Imediata/Destaque)
- **Complementares**: Preto, Cinza Grafite (`#333333`), Branco.

Essas cores foram incorporadas nos estilos do Tailwind CSS e nos componentes React para manter a identidade visual.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções de bugs ou novas funcionalidades.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. (Nota: O arquivo LICENSE não foi criado neste processo, mas é uma boa prática incluí-lo.)

