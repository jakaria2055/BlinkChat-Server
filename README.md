# 💬 BlinkChat

BlinkChat is a **real-time chat application** built with the **MERN stack** and **Socket.io**, featuring **JWT authentication**, secure APIs, and responsive UI.  
It allows users to chat instantly, view online statuses, and manage messages securely.

<h3>Chech Live: </h3>
<h4>https://blinkchat-server.vercel.app/api/status</h4>

---

## 🚀 Features
- ⚡ **Real-time Messaging** using Socket.io  
- 🔒 **JWT Authentication & Authorization**  
- 👥 **User Management** (Sign Up, Login, Update Profile)  
- 📩 **Message Management** (Send, Read, Seen Status)  
- 🌐 **CORS-enabled APIs** for cross-origin access  
- 🛡️ **Secure Backend** with middleware (JWT, Auth Guard)  
- 📦 **Cloudinary Integration** for media storage  
- 🗄️ **MongoDB with Mongoose** for structured data handling  

---

## 🛠️ Tech Stack
- **Frontend**: React, TailwindCSS, DaisyUI *(optional)*  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB + Mongoose  
- **Authentication**: JWT + bcryptjs  
- **Real-time Communication**: Socket.io  
- **Email Notifications**: NodeMailer *(optional)*  
- **Image Uploads**: Cloudinary  

---

## 📂 Project Structure
```
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 api/
│   ├── 📄 api.js
│   └── 📄 messageAPI.js
├── 📁 config/
│   └── 📄 database.js
├── 📁 controllers/
│   ├── 📄 messageController.js
│   └── 📄 userController.js
├── 📁 middleware/
│   └── 📄 auth.js
├── 📁 models/
│   ├── 📄 MessageModel.js
│   └── 📄 UserModel.js
├── 📁 node_modules/ 🚫 (auto-hidden)
├── 📁 utility/
│   ├── 📄 cloudinary.js
│   └── 📄 utils.js
├── 🔒 .env 🚫 (auto-hidden)
├── 🚫 .gitignore
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 server.js
└── 📄 vercel.json
```

## 📂 .env FILE
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000


🔌 API Endpoints
<h6>Authentication</h6>
POST /api/auth/signup → Register new user
POST /api/auth/login → Login user
PUT /api/auth/update-profile → Update user profile (Protected)
GET /api/auth/check → Verify auth (Protected)

<h6>Messages</h6>
GET /api/messages/users → Get users for sidebar (Protected)
GET /api/messages/:id → Get messages with a user (Protected)
GET /api/messages/mark/:id → Mark message as seen (Protected)
POST /api/messages/send/:id → Send message (Protected)


⚡ Socket.io Events
connection → User connects with userId
getOnlineUsers → Broadcast online users list
disconnect → Remove user from online map

