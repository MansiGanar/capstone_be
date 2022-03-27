import express from "express";

import cors from "cors";

import listEndpoints from "express-list-endpoints";

import mongoose from "mongoose";

const server = express();

server.use(cors());

server.use(express.json());

server.listen(3001, async () => {
  try {
    await mongoose.connect();
    console.log(`✅ Server is running on port 3001`);
  } catch (error) {
    console.log`❌ Server is not running due to : ${error}`;
  }
});
