require("dotenv").config();

const dns = require("node:dns");
dns.setServers(["8.8.8.8"]);

const express = require("express");
const { connectDB } = require("./Config/db.js");
const router = require("./Routers/todo_router.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Default API");
});

app.use("/api/todos", router);

const PORT = process.env.PORT || 3000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Server startup failed:", error.message);
  process.exit(1);
});
