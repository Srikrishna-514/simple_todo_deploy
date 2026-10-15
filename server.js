const dns = require("node:dns");

dns.setServers(["8.8.8.8"]);
require("dotenv").config();

// const mongoose = require("mongoose");
const express = require("express");
const { connectDB } = require("./Config/db.js");
const router = require("./Routers/todo_router.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// APIs
app.use("/api/todos", router);

app.get("/", (req, res) => {
  res.send("default");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
