# Contest Tracker

A full-stack web application to track, browse, and participate in coding contests from various platforms. Built with React (Vite) for the frontend and Node.js/Express for the backend, with MySQL for persistent storage.

## Features

- 🔒 User authentication (register, login, logout)
- 🏆 Browse live and upcoming coding contests
- 📊 Leaderboard and user profiles
- 👤 Protected routes for authenticated users
- 🌙 Modern, responsive UI with Tailwind CSS
- ⚡ Fast development with Vite and React
- 🛡️ Secure backend with JWT, Helmet, and rate limiting

## Tech Stack

**Frontend:**

- React
- Vite
- Tailwind CSS
- React Router

**Backend:**

- Node.js
- Express.js
- MySQL
- JWT Authentication

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MySQL

### 1. Clone the repository

```bash
https://github.com/your-username/contest-tracker.git
cd contest-tracker
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` folder:
  ```env
  DB_HOST=localhost
  DB_USER=your_mysql_user
  DB_PASSWORD=your_mysql_password
  DB_NAME=auth_contesttrack
  JWT_SECRET=your_jwt_secret
  PORT=5000
  ```
- Start the backend server:
  ```bash
  npm run dev
  ```

### 3. Setup the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173)

## Database Setup

- Create a MySQL database named `auth_contesttrack`.
- Example table for users:
  ```sql
  CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  ```

## Folder Structure

```
Contest_tracker/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   └── package.json
└── README.md
```

## Usage

- Register a new account or login.
- Browse live and upcoming contests.
- View your profile and leaderboard.
- Only authenticated users can access protected pages (profile, browse contests, etc).

## Scripts

### Backend

- `npm run dev` — Start backend with nodemon
- `npm start` — Start backend with Node.js

### Frontend

- `npm run dev` — Start frontend development server

## Security & Best Practices

- Passwords are hashed using bcryptjs
- JWT is used for authentication
- Helmet and CORS for security
- Input validation and rate limiting

## Dependencies

### Backend

- express
- cors
- dotenv
- bcryptjs
- jsonwebtoken
- express-rate-limit
- express-validator
- helmet
- mysql2
- nodemon (dev)

Install all backend dependencies with:

```bash
npm install express cors dotenv bcryptjs jsonwebtoken express-rate-limit express-validator helmet mysql2
npm install --save-dev nodemon
```

### Frontend

- react
- react-dom
- react-router-dom
- vite
- tailwindcss
- lucide-react (icons)
- eslint (dev)

Install all frontend dependencies with:

```bash
npm install react react-dom react-router-dom tailwindcss lucide-react
npm install --save-dev vite eslint
```

## License

This project is licensed under the MIT License.

---
