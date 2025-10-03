import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./config/database.js";
import userRouter from "./api/api.js";
import messageRouter from "./api/messageAPI.js";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

//IMPLENT SOCKET.io SERVER
export const io = new Server(server, {
  cors: { origin: "*" },
});

//STORE ONLINE USER
export const userSocketMap = {};

//Socket.io CONNECTION HANDLER
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User Connected", userId);

  if (userId) userSocketMap[userId] = socket.id;

  //EMIT ONLINE USER TO ALL CONNECTED CLIENTS
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnected", () => {
    console.log("User Disconnected", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

app.use(express.json({ limit: "4mb" }));
app.use(cors());

app.use("/api/status", (req, res) => res.send("Server is Running fine..."));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

await connectDB();

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => console.log("Server is running on PORT: ", +PORT));
}


//EXPORT SERVER FOR VERCEL
export default server;
