// src/app.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

// CORS configuration
const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Auth imports
const userRepo = require("./infrastructures/database/UserRepoImpl");
const hashService = require("./infrastructures/services/hash.service");
const tokenService = require("./infrastructures/services/token.service");
const authUseCases = require("./domain/use-cases/auth.usecases")(
  userRepo,
  hashService,
  tokenService
);
const authController = require("./interfaces/controller/user.controller")(
  authUseCases,
  userRepo
);
const authRoutes = require("./interfaces/routes/user.routes")(authController);
const forgotRoutes = require("./interfaces/routes/forgetPassword.routes");

// Review imports
const ReviewRepo = require("./infrastructures/database/reviewRepoImpl");
const reviewUseCases = require("./domain/use-cases/review.usecases")(ReviewRepo);
const reviewController = require("./interfaces/controller/review.controller")(
  reviewUseCases
);
const reviewRoutes = require("./interfaces/routes/review.routes")(reviewController);

// Notification imports
const notificationRepo = require("./infrastructures/database/notificationRepoImpl");
const notificationUseCases =
  require("./domain/use-cases/notification.usecases")(notificationRepo);
const notificationController =
  require("./interfaces/controller/notification.controller")(
    notificationUseCases
  );
const notificationRoutes =
  require("./interfaces/routes/notification.routes")(notificationController);

// Complaint imports
const complaintRepo = require("./infrastructures/database/complaintRepoImpl");
const complaintUseCases = require("./domain/use-cases/complaint.usecases")(
  complaintRepo
);
const complaintController =
  require("./interfaces/controller/complaint.controller")(complaintUseCases);
const complaintRoutes =
  require("./interfaces/routes/complaint.routes")(complaintController);

// Routes
app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api", forgotRoutes);

module.exports = app;
