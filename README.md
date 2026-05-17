
# Secure User Management System 

A secure, server-side rendered user management application featuring input validation, data sanitization, and a custom data storage layer. Built using Node.js, Express, and EJS as part of backend engineering patterns.

##  Features
- **Full CRUD Workflow:** Create, read, update, and delete user profiles seamlessly.
- **Robust Input Validation:** Leverages `express-validator` to enforce required fields, character lengths, and correct data types before processing requests.
- **Data Sanitization:** Automatically trims and escapes inputs (`trim()`, `escape()`) to protect against basic injection and Cross-Site Scripting (XSS) vulnerabilities.
- **Custom Storage Layer (`userStorage.js`):** Emulates a real database layer with an isolated storage module to handle user querying, updates, and indexing in memory.
- **User-Friendly Error Alerts:** Dynamically parses validation errors on the backend and displays targeted warning alerts back to the client using EJS partials.

## 🛠️ Tech Stack
- **Backend Framework:** Node.js & Express.js
- **Form Security:** [express-validator](https://express-validator.github.io/docs/)
- **Data Emulation:** Custom `userStorage` module
- **Frontend Engine:** EJS (Embedded JavaScript) Templates
- **Styling:** Custom CSS3 (Flexbox & Responsive Design)

