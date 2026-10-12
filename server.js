const express = require("express");
const router = require("./Routers/todo_router.js");
const { connectDB } = require("./Config/db.js");
const { todoModel } = require("./Models/todo_models.js");
const app = express();
connectDB();
//middleWare
app.use(express.json());
app.use(express.urlencoded());
//apis
app.use("/api/todos", router);
//default Api
app.get("/", (req, res) => {
  res.send("default");
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
