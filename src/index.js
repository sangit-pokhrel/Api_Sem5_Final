// src/index.js
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

const { connectDB } = require("./infrastructure/database/database");
dotenv.config();


//auth imports
const userRepo = require("./infrastructure/database/UserRepoImpl");
const hashService = require("./infrastructure/services/hash.service");
const tokenService = require("./infrastructure/services/token.service");
const authUseCases = require("./domain/use-cases/auth.usecases")(
  userRepo,
  hashService,
  tokenService
);
const authController = require("./interfaces/controllers/user.controller")(
  authUseCases,
  userRepo
);

const authRoutes = require("./interfaces/routes/user.routes")(authController);
const forgotRoutes = require("./interfaces/routes/forgetPassword.routes");

//review imports
const ReviewRepo = require("./infrastructure/database/reviewRepoImpl");
const reviewUseCases = require("./domain/use-cases/review.usecases")(
  ReviewRepo
);
const reviewController = require("./interfaces/controllers/review.controller")(
  reviewUseCases
);
const reviewRoutes = require("./interfaces/routes/review.routes")(
  reviewController
);
//notification routes imports
const notificationRepo = require("./infrastructure/database/notificationRepoImpl");
const notificationUseCases =
  require("./domain/use-cases/notification.usecases")(notificationRepo);
const notificationController =
  require("./interfaces/controllers/notification.controller")(
    notificationUseCases
  );
const notificationRoutes = require("./interfaces/routes/notification.routes")(
  notificationController
);


const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);


mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT || 5000, () =>
    console.log(`✅ Server running on port ${process.env.PORT}`)
  );
  connectDB();
});
