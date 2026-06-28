# 🚀 Task Tracker Pro

A full-stack MERN Task Tracker application that allows users to create, update, delete, search, and manage tasks efficiently.

## 🌐 Live Demo

Frontend:
https://task-tracker-pro-snowy.vercel.app

Backend:
https://task-tracker-pro-backend.onrender.com

## 📌 Features

- Create Tasks
- View Tasks
- Update Tasks
- Delete Tasks
- Search Tasks
- Filter Tasks
- Dashboard Statistics
- Responsive UI
- Dynamic Updates
- Toast Notifications
- MongoDB Database

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Toastify

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas

## 📂 Folder Structure

task-tracker-pro
│
├── client
├── server
└── README.md

## Installation

### Clone Repository

```bash
git clone https://github.com/anjaliitgit/task-tracker-pro.git
```

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## Environment Variables

### Backend (.env)

```
MONGO_URI=YourMongoDBConnectionString
PORT=5000
```

### Frontend (.env)

```
VITE_API_URL=http://localhost:5000/api/tasks
```

## REST API

GET /api/tasks

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

## Author

Sulekha Singh
