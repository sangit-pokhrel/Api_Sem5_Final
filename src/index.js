// src/index.js
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

const { connectDB } = require("./infrastructures/database/database");
dotenv.config();


//auth imports
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

//review imports
const ReviewRepo = require("./infrastructures/database/reviewRepoImpl");
const reviewUseCases = require("./domain/use-cases/review.usecases")(
  ReviewRepo
);
const reviewController = require("./interfaces/controller/review.controller")(
  reviewUseCases
);
const reviewRoutes = require("./interfaces/routes/review.routes")(
  reviewController
);
//notification routes imports
const notificationRepo = require("./infrastructures/database/notificationRepoImpl");
const notificationUseCases =
  require("./domain/use-cases/notification.usecases")(notificationRepo);
const notificationController =
  require("./interfaces/controller/notification.controller")(
    notificationUseCases
  );
const notificationRoutes = require("./interfaces/routes/notification.routes")(
  notificationController
);

//complaint imports
const complaintRepo = require("./infrastructures/database/complaintRepoImpl");
const complaintUseCases = require("./domain/use-cases/complaint.usecases")(
  complaintRepo
);
const complaintController =
  require("./interfaces/controller/complaint.controller")(complaintUseCases);
const complaintRoutes = require("./interfaces/routes/complaint.routes")(
  complaintController
);


const app = express();
app.use(express.json());
app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", authRoutes);

app.use("/api/notifications", notificationRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api", forgotRoutes);





mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT || 5000, () =>
    console.log(`✅ Server running on port ${process.env.PORT}`)
  );
  connectDB();
});
