<div align="center">
  <!-- <img src="frontend/public/banner.png" alt="ChatApp Logo" width="100%" /> -->
  
  # 💬 KChat - Real-time Messaging
  
  **A modern, full-stack chat application built for seamless communication.**
  
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  ![Node](https://img.shields.io/badge/Node.js-16%2B-green)
  ![React](https://img.shields.io/badge/React-18-blue)
  ![Socket.io](https://img.shields.io/badge/Socket.io-4.x-black)
  ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)

  [Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Deployment](#-deployment)
</div>

<br />

## ✨ Highlights

| | |
|:---:|:---|
| 🌟 | **Tech Stack**: MERN (MongoDB, Express, React, Node) + Socket.io + TailwindCSS + DaisyUI |
| 🎃 | **Authentication**: Secure JWT-based authentication system |
| 👾 | **Real-time**: Instant messaging powered by Socket.io |
| 🚀 | **Status Tracking**: Online/Offline status & "Last Seen" indicators |
| 👌 | **State Management**: Robust global state with Zustand |
| 🐞 | **Error Handling**: Comprehensive error management for client & server |
| ⭐ | **Deployment**: Ready for Render (Backend) and Vercel (Frontend) |
| ⏳ | **Modern UI**: Dark mode, glassmorphism, and responsive mobile-first design |

---

## 🚀 Features

- 🔐 **User Authentication**: Sign up, Login, and Logout with secure JWT HttpOnly cookies.
- 💬 **Real-time Messaging**: Instant delivery with typing indicators and read receipts (ticks).
- 👥 **User Presence**: See who is online now and when they were completely last seen.
- 📷 **Media Sharing**: Upload and share images via Cloudinary.
- 🎨 **Elegant UI**: Polished interface with chat bubbles, timestamps, and smooth transitions.
- 🛡️ **Security**: Password encryption using bcryptjs and protected routes.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Real-time**: [Socket.io-client](https://socket.io/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- **Real-time**: [Socket.io](https://socket.io/)
- **Authentication**: JWT (JSON Web Tokens)
- **File Storage**: [Cloudinary](https://cloudinary.com/)

---

## ⚙️ Installation

Follow these steps to set up the project locally.

### 1. Clone the repository  
```bash
git clone https://github.com/kunwarPratap93/-KChat-ChattingApp
cd fullstack-chatapp-kchat
```

### 2. Install dependencies
Install packages for both the root, frontend, and backend:
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the `backend` directory:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_super_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

### 4. Start Development Servers

**Run Backend:**
```bash
npm run start --prefix backend
```

**Run Frontend:**
```bash
npm run dev --prefix frontend
```

---

## 📦 Production Build

To build the application for production:

```bash
npm run build
```
*This command installs dependencies, builds the frontend, and prepares the backend.*

To start the production server:
```bash
npm start
```

---

## ☁️ Deployment

### Backend (e.g., Render)
1. Fork the repo.
2. Create a new Web Service on Render.
3. Connect your GitHub repo.
4. Set Build Command: `npm install && npm install --prefix backend`
5. Set Start Command: `npm run start --prefix backend`
6. Add all environment variables from your `.env` file.

### Frontend (e.g., Vercel)
1. Import the repo to Vercel.
2. Set Root Directory to `frontend`.
3. Set Build Command: `npm run build`.
4. Add environment variables if necessary (e.g., API URL).

---

## 📂 Project Structure

```text
chatapp/
├── frontend/           # React application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Application views
│   │   ├── store/      # Zustand state stores
│   │   └── lib/        # Utilities (axios, etc.)
│   └── public/         # Static assets
├── backend/            # Express server
│   ├── src/
│   │   ├── controllers/# Route controllers
│   │   ├── models/     # Mongoose models
│   │   ├── routes/     # API routes
│   │   └── lib/        # Socket & DB configs
│   └── .env            # Env variables
└── package.json        # Root scripts
```

---

## 🤝 Contributing

Contributions are welcome!
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the ISC License. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/kunwarPratap93">Pratap</a></p>
</div>

