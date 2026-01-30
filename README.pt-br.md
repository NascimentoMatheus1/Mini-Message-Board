# 📝 Mini Message Board [![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/40dba72aa29f475038f9856ce604c5beaaf8e3c4/README.md)

 Uma aplicação web full-stack dinâmica que permite aos usuários postar e visualizar mensagens em tempo real. Este projeto foi construído para praticar os fundamentos de Node.js, Express e Server-Side Rendering (Renderização no Lado do Servidor).

# 🌐 Deploy (Hospedagem)
- Backend: Node.js/Express hospedado no Render (Plano Gratuito).
- Banco de Dados: PostgreSQL hospedado na plataforma Neon.
- Nota: Este projeto está em um servidor gratuito que "hiberna" após períodos de inatividade. Por favor, aguarde cerca de um minuto para o carregamento inicial enquanto o servidor desperta; após isso, ele funcionará perfeitamente!
  
# 🚀 Demonstração ao Vivo
Você pode explorar a aplicação no link 👉 [🔥 Live Demo](https://mini-message-board-nascimentomatheus1.onrender.com)

# 📸 Preview

Index: Uma lista limpa de cartões exibindo as mensagens dos usuários.

![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/baf8bfd073f41de6b71165cc73e4f775b795d07b/README.IMAGES/index-page-mini-message-board.png)

Página de Formulário: Um formulário amigável com feedback de validação em tempo real.

![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/baf8bfd073f41de6b71165cc73e4f775b795d07b/README.IMAGES/form-page-mini-message-board.png)

Detalhes da Mensagem: Página dedicada para visualização individual de mensagens.

![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/baf8bfd073f41de6b71165cc73e4f775b795d07b/README.IMAGES/message-details-page-mini-message-board.png)

Página error: Uma página de erro personalizada para uma experiência de usuário polida.

![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/baf8bfd073f41de6b71165cc73e4f775b795d07b/README.IMAGES/error-page-mini-message-board.png)

# 🚀 Funcionalidades
- Feed em Tempo Real: Visualize uma lista de mensagens com nomes dos autores e carimbos de data/hora.
- Envio de Mensagens: Um formulário dedicado para capturar a entrada do usuário e adicioná-la ao mural.
- Persistência com PostgreSQL: Integração completa (CRUD) com banco de dados Postgres via Neon, garantindo que as mensagens sejam armazenadas com segurança e persistam mesmo após reinicializações do servidor.
- Visualizações Detalhadas Dinâmicas: Páginas individuais para cada mensagem para visualizar detalhes específicos via roteamento dinâmico.
- Manipulação de Dados Robusta: Implementa o padrão Post/Redirect/Get (PRG) para evitar envios duplicados de formulários e garantir uma UX suave.
- Validação de Dados: Validação integrada no lado do servidor para garantir a integridade das mensagens e proteger contra entradas maliciosas.

# 🛠️ Tecnologias
- Backend: Node.js, Express.js
- Banco de Dados: PostgreSQL
- Frontend: EJS (Embedded JavaScript Templates), CSS3

# 🧠 Principais Objetivos de Aprendizado
- Gerenciamento de Banco de Dados Relacional: Design de schemas e execução de consultas SQL para armazenar e recuperar mensagens.
- Pool de Conexões (Connection Pooling): Gerenciamento eficiente de conexões entre o backend Node.js e a instância remota do Postgres.
- Ciclo de Requisição-Resposta: Gestão de requisições GET e POST para controlar o fluxo de dados entre cliente e servidor.
- Configuração de Middlewares: Utilização de middlewares de nível de aplicação para converter dados de formulários em objetos JavaScript utilizáveis (req.body).
- Templating Dinâmico: Uso de EJS para percorrer arrays de dados e injetar conteúdo dinâmico no HTML.
- Segurança de Formulários: Implementação de sanitização de inputs e escape de caracteres para prevenir ataques de Cross-Site Scripting (XSS).
- Roteamento Parametrizado: Configuração de rotas dinâmicas (ex: /messages/:id) para exibir pontos de dados específicos.
