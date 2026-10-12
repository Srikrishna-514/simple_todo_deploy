const mongoose = require("mongoose");
async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017/", {
    dbName: "sampleDemo",
  });
  console.log("Database connected successfully");
}
module.exports = { connectDB };
