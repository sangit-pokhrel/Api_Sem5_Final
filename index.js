// src/index.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./src/app.js");
const { connectDB } = require("./src/infrastructures/database/database.js");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`✅ Server running on port ${process.env.PORT || 5000}`)
    );
    connectDB();
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  });
