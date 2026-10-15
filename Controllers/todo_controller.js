const { todoModel } = require("../Models/todo_models.js");
const getAllTodos = async (req, res) => {
  try {
    console.log("Before find()");
    console.log("Ready state:", todoModel.db.readyState);
    console.log("Collection:", todoModel.collection.name);

    const todos = await todoModel.find().exec();

    console.log("After find(), count:", todos.length);
    res.status(200).json({ data: todos });
  } catch (error) {
    console.error("FIND ERROR:", error.stack || error.message);
    res.status(500).json({ error: error.message });
  }
};
const getTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const getTodoViaId = await todoModel.findById(id);
    if (!getTodoViaId) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }
    res.status(200).json({
      message: "Todo fetched successfully",
      data: getTodoViaId,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
const postTodos = async (req, res) => {
  try {
    const postTodo = await todoModel.create(req.body);
    res.status(200).send(postTodo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = await todoModel.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updateData) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo updated successfully",
      data: updateData,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteData = await todoModel.findByIdAndDelete(id);

    if (!deleteData) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo deleted successfully",
      data: deleteData,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
module.exports = { getAllTodos, getTodos, postTodos, updateTodos, deleteTodos };
