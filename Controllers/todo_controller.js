const { todoModel } = require("../Models/todo_models.js");
const getAllTodos = async (req, res) => {
  try {
    const todoData = await todoModel.find();

    res.status(200).json({ message: "todo added successfully", inf: todoData });
  } catch (error) {
    res.status(400).send(error.message);
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
