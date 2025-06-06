// src/index.js
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();





const app = express();
app.use(express.json());



mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT || 5000, () =>
    console.log(`✅ Server running on port ${process.env.PORT}`)
  );
});
