# 📝 Mini Message Board [![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/12171d31c4884c36f0313a4492a335956c8e3965/README.pt-br.md)
A dynamic, full-stack web application that allows users to post and view messages in real-time. This project was built to practice the fundamentals of Node.js, Express, and Server-Side Rendering.

#  🌐 Deployment 
 - Backend: Node.js/Express hosted on Render (Free Tier).
 - Database: PostgreSQL hosted on Neon platform.
- **This project is on a free server that hibernates during inactivity. Please be patient for about a minute while it boots up; it will work perfectly immediately after that!**
 
#  🚀Live Demo: 
You can explore the live application at the link this link 👉 [🔥 Live Demo](https://mini-message-board-nascimentomatheus1.onrender.com)

# 📸 Preview
Index: A clean list of cards showcasing user messages.
![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/baf8bfd073f41de6b71165cc73e4f775b795d07b/README.IMAGES/index-page-mini-message-board.png)

Form page: A user-friendly form with real-time validation feedback.
![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/baf8bfd073f41de6b71165cc73e4f775b795d07b/README.IMAGES/form-page-mini-message-board.png)

Message details page:
![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/baf8bfd073f41de6b71165cc73e4f775b795d07b/README.IMAGES/message-details-page-mini-message-board.png)

Error Page: A custom-designed error page for a polished user experience.
![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/baf8bfd073f41de6b71165cc73e4f775b795d07b/README.IMAGES/error-page-mini-message-board.png)

# 🚀 Features
- Real-time Feed: View a list of messages with author names and timestamps.
- Message Submission: A dedicated form to capture user input and add it to the board.
- PostgreSQL Persistence: Full CRUD integration with a Neon-hosted Postgres database, ensuring messages are stored securely and persist across server restarts.
- Dynamic Detail Views: Individual pages for each message to view granular details via dynamic routing.
- Robust Data Handling: Implements the Post/Redirect/Get (PRG) pattern to prevent duplicate form submissions and ensure a smooth UX.
- Data Validation: Integrated server-side validation to ensure message integrity and protect against malicious input.

# 🛠️ Tech Stack
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Frontend: EJS (Embedded JavaScript Templates), CSS3

# 🧠 Key Learning Objectives
During this project, I mastered the following concepts:
- Relational Database Management: Designing schemas and performing SQL queries to store and retrieve user messages.
- Database Connection Pooling: Managing efficient connections between a Node.js backend and a remote Postgres instance.
- The Request-Response Cycle: Managing GET and POST requests to handle data flow between the client and server.
- Middleware Configuration: Utilizing app-level middleware to parse incoming form data into usable JavaScript objects.
- Dynamic Templating: Using EJS to loop through data arrays and inject dynamic content into HTML.
- Form Security: Implementing input sanitization and escaping to prevent Cross-Site Scripting (XSS) attacks.
- Parameterized Routing: Setting up dynamic routes (e.g., /messages/:id) to display specific data points.
