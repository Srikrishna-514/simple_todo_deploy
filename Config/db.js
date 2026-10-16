const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "sampleDemo",
    serverSelectionTimeoutMS: 10000,
  });

  console.log("Database connected successfully");
}

module.exports = { connectDB };
