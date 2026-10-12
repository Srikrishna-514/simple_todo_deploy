const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  getTodos,
  postTodos,
  deleteTodos,
  updateTodos,
} = require("../Controllers/todo_controller.js");
router.get("/getAllTodos", getAllTodos);
router.get("/getTodo/:id", getTodos);
router.post("/addTodo", postTodos);
router.put("/updateTodo/:id", updateTodos);
router.delete("/deleteTodo/:id", deleteTodos);
module.exports = router;
