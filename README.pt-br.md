# 📝 Mini Message Board [![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/40dba72aa29f475038f9856ce604c5beaaf8e3c4/README.md)

 Uma aplicação web full-stack dinâmica que permite aos usuários postar e visualizar mensagens em tempo real. Este projeto foi construído para praticar os fundamentos de Node.js, Express e Server-Side Rendering (Renderização no Lado do Servidor).

# 🚀 Deployment no Render
Este projeto está online e hospedado no Render. Escolhi o Render por seu pipeline de CI/CD (Integração Contínua/Implantação Contínua) automatizado, que sincroniza diretamente com meu repositório do GitHub.
# 🌐 Demonstração ao Vivo:
Você pode explorar a aplicação no link 👉 [🔥 Live Demo](https://mini-message-board-nascimentomatheus1.onrender.com)
***Por favor, observe que, como o projeto está hospedado no plano gratuito do Render, o servidor pode levar aproximadamente 60 segundos para "despertar" caso não tenha sido acessado recentemente. Assim que o carregamento inicial for concluído, o mural estará totalmente responsivo e pronto para suas mensagens!
# 📸 Preview

Index: Uma lista limpa de cartões exibindo as mensagens dos usuários.

![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/088710afc755b1dfc22e01052cd4d350943cc843/index-page.png)

Página de Formulário: Um formulário amigável com feedback de validação em tempo real.

![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/088710afc755b1dfc22e01052cd4d350943cc843/form-page.png)

Página 404: Uma página de erro personalizada para uma experiência de usuário polida.

![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/088710afc755b1dfc22e01052cd4d350943cc843/404-page.png)

# 🚀 Funcionalidades
- Feed em Tempo Real: Visualize uma lista de mensagens com nomes dos autores e carimbos de data/hora.
- Envio de Mensagens: Um formulário dedicado para capturar a entrada do usuário e adicioná-la ao mural.
- Visualizações Detalhadas Dinâmicas: Páginas individuais para cada mensagem para visualizar detalhes específicos via roteamento dinâmico.
- Manipulação de Dados Robusta: Implementa o padrão Post/Redirect/Get (PRG) para evitar envios duplicados de formulários e garantir uma UX suave.
- Validação de Dados: Validação integrada no lado do servidor para garantir a integridade das mensagens e proteger contra entradas maliciosas.

# 🛠️ Tecnologias
- Backend: Node.js, Express.js
- Frontend: EJS (Embedded JavaScript Templates), CSS3
- Middleware: express-validator (Validação), express.urlencoded (Parsing de corpo de requisição)

# 🧠 Principais Objetivos de Aprendizado
- Durante este projeto, dominei os seguintes conceitos:
- O Ciclo de Requisição-Resposta: Gerenciamento de requisições GET e POST para lidar com o fluxo de dados entre o cliente e o servidor.
- Configuração de Middleware: Utilização de middleware em nível de aplicação para converter dados de formulários em objetos JavaScript utilizáveis (req.body).
- Templating Dinâmico: Uso de EJS para percorrer arrays de dados e injetar conteúdo dinâmico no HTML.
- Segurança de Formulários: Implementação de sanitização e escape de entradas para prevenir ataques de Cross-Site Scripting (XSS).
- Roteamento Parametrizado: Configuração de rotas dinâmicas (ex: /messages/:id) para exibir pontos de dados específicos.
