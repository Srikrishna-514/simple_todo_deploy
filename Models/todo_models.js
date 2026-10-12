const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
      minLength: 3,
      uppercase: true,
      trim: true,
    },
    body: { type: String, required: true, trim: true, unique: true },
  },
  { timestamps: true },
);
const todoModel = mongoose.model("todo", todoSchema);
module.exports = { todoModel };
