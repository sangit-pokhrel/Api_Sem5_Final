const express = require("express");
const rateLimiter = require("../middlewares/rateLimiter.middlewares");
const upload = require("../middlewares/multer.middlewares");
const authController = require("../controller/user.controller");
const authMiddleware = require("../middlewares/auth.middlewares");

module.exports = (controller) => {
  const router = express.Router();

  router.use(rateLimiter);

  // Authentication
  router.post("/register", controller.register);
  router.post("/login", controller.login);

  // Create
  router.post("/", controller.createUser);

  // Get all
  router.get("/", controller.getAllUsers);

  // Get by fields
  router.get("/role/:role", controller.getUsersByRole);
  router.get("/status/:status", controller.getUsersByStatus);
  router.get("/id/:id", controller.getUserById);
  router.get("/email/:email", controller.getUserByEmail);
  router.get("/username/:username", controller.getUserByUsername);
  router.get("/phone/:phone", controller.getUserByPhone);

  // Update by fields
  router.put("/id/:id", controller.updateUserById);
  router.put("/email/:email", controller.updateUserByEmail);
  router.put("/username/:username", controller.updateUserByUsername);
  router.put("/phone/:phone", controller.updateUserByPhone);

  // Delete by fields
  router.delete("/id/:id", controller.deleteUserById);
  router.delete("/email/:email", controller.deleteUserByEmail);
  router.delete("/username/:username", controller.deleteUserByUsername);
  router.delete("/phone/:phone", controller.deleteUserByPhone);

  router.post(
    "/upload/profilePic",
    authMiddleware,
    upload.single("profilePic"), // ✅ this now returns the middleware function
    controller.uploadProfilePic
  );
  return router;
};
