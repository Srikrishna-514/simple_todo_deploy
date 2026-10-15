const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "sampleDemo",
    serverSelectionTimeoutMS: 10000,
  });

  console.log("Database connected successfully");
}

module.exports = { connectDB };
