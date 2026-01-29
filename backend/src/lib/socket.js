import { Server } from "socket.io";
import http from "http";
import express from "express";
import Message from "../models/message.model.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}


const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("typing", ({ chatId }) => {
    const receiverSocketId = getReceiverSocketId(chatId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("typing", { senderId: userId });
    }
  });

  socket.on("stopTyping", ({ chatId }) => {
    const receiverSocketId = getReceiverSocketId(chatId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("stopTyping", { senderId: userId });
    }
  });

  socket.on("markMessagesAsSeen", async ({ senderId }) => {
    try {
      await Message.updateMany(
        { senderId: senderId, receiverId: userId, status: { $ne: "seen" } },
        { $set: { status: "seen" } }
      );

      // Notify the SENDER (other person) that I (userId) have seen the messages
      const receiverSocketId = getReceiverSocketId(senderId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("messagesSeen", { userId: userId });
      }
    } catch (error) {
      console.log("Error in markMessagesAsSeen event", error);
    }
  });

  socket.on("disconnect", async () => {
    console.log("A user disconnected", socket.id);
    if (userId) {
      // Update last seen
      try {
        const User = (await import("../models/user.model.js")).default;
        await User.findByIdAndUpdate(userId, { lastSeen: new Date() });
      } catch (err) {
        console.error("Error updating lastSeen:", err);
      }
    }
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };