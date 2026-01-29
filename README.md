# 📝 Mini Message Board [![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/12171d31c4884c36f0313a4492a335956c8e3965/README.pt-br.md)
A dynamic, full-stack web application that allows users to post and view messages in real-time. This project was built to practice the fundamentals of Node.js, Express, and Server-Side Rendering.

# 🚀 Deployment on Render
 This project is live and hosted on Render. I chose Render for its automated CI/CD (Continuous Integration/Continuous Deployment) pipeline, which syncs directly with my GitHub repository.
 
# 🌐 Live Demo: 
You can explore the live application at the link this link 👉 [🔥 Live Demo](https://mini-message-board-nascimentomatheus1.onrender.com)
***Please note that since the project is hosted on Render's free tier, the server may take approximately 60 seconds to "spin up" if it hasn't been accessed recently. Once the initial load is complete, the board will be fully responsive and ready for your messages!

# 📸 Preview
Index: A clean list of cards showcasing user messages.
![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/088710afc755b1dfc22e01052cd4d350943cc843/index-page.png)

Form page: A user-friendly form with real-time validation feedback.
![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/088710afc755b1dfc22e01052cd4d350943cc843/form-page.png)

404 Page: A custom-designed error page for a polished user experience.
![image.alt](https://github.com/NascimentoMatheus1/Mini-Message-Board/blob/088710afc755b1dfc22e01052cd4d350943cc843/404-page.png)

# 🚀 Features
- Real-time Feed: View a list of messages with author names and timestamps.
- Message Submission: A dedicated form to capture user input and add it to the board.
- Dynamic Detail Views: Individual pages for each message to view granular details via dynamic routing.
- Robust Data Handling: Implements the Post/Redirect/Get (PRG) pattern to prevent duplicate form submissions and ensure a smooth UX.
- Data Validation: Integrated server-side validation to ensure message integrity and protect against malicious input.

# 🛠️ Tech Stack
- Backend: Node.js, Express.js
- Frontend: EJS (Embedded JavaScript Templates), CSS3
- Middleware: express-validator (Validation), express.urlencoded (Body parsing)

# 🧠 Key Learning Objectives
During this project, I mastered the following concepts:
- The Request-Response Cycle: Managing GET and POST requests to handle data flow between the client and server.
- Middleware Configuration: Utilizing app-level middleware to parse incoming form data into usable JavaScript objects (req.body).
- Dynamic Templating: Using EJS to loop through data arrays and inject dynamic content into HTML.
- Form Security: Implementing input sanitization and escaping to prevent Cross-Site Scripting (XSS) attacks.
- Parameterized Routing: Setting up dynamic routes (e.g., /messages/:id) to display specific data points.
