# 📝 Mini Message Board
- A dynamic, full-stack web application that allows users to post and view messages in real-time. This project was built to practice the fundamentals of Node.js, Express, and Server-Side Rendering.

# 📸 Preview
## Index: A clean list of cards showcasing user messages.

## New Message: A user-friendly form with real-time validation feedback.

## 404 Page: A custom-designed error page for a polished user experience.

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
## During this project, I mastered the following concepts:
- The Request-Response Cycle: Managing GET and POST requests to handle data flow between the client and server.
- Middleware Configuration: Utilizing app-level middleware to parse incoming form data into usable JavaScript objects (req.body).
- Dynamic Templating: Using EJS to loop through data arrays and inject dynamic content into HTML.
- Form Security: Implementing input sanitization and escaping to prevent Cross-Site Scripting (XSS) attacks.
- Parameterized Routing: Setting up dynamic routes (e.g., /messages/:id) to display specific data points.
