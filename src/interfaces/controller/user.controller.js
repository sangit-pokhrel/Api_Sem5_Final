// src/interfaces/controllers/AuthController.js

const AuthController = (authUseCases, userRepo) => ({
  // ========== AUTH METHODS ==========

  register: async (req, res) => {
    try {
      const result = await authUseCases.register(req.body);
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        token: result.token,
        user: result.user,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const result = await authUseCases.login(req.body);
      res.status(200).json({
        success: true,
        message: "Login successful",

        token: result.token,
        user: result.user,
      });
    } catch (error) {
      res.status(401).json({ success: false, message: error.message });
    }
  },

  // ========== CREATE METHODS ==========

  createUser: async (req, res) => {
    console.log("Available useCase methods:", Object.keys(useCases));
    try {
      const user = await userRepo.createUser(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  // ========== GET METHODS ==========

  getAllUsers: async (_, res) => {
    try {
      const users = await userRepo.getAllUsers();
      res.json({ success: true, data: users });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getUsersByRole: async (req, res) => {
    try {
      const users = await userRepo.getAllUsersByRole(req.params.role);
      res.json({ success: true, data: users });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getUsersByStatus: async (req, res) => {
    try {
      const users = await userRepo.getAllUsersByStatus(req.params.status);
      res.json({ success: true, data: users });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await userRepo.getUserById(req.params.id);
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getUserByEmail: async (req, res) => {
    try {
      const user = await userRepo.getUserByEmail(req.params.email);
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getUserByUsername: async (req, res) => {
    try {
      const user = await userRepo.getUserByUsername(req.params.username);
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  getUserByPhone: async (req, res) => {
    try {
      const user = await userRepo.getUserByPhoneNumber(req.params.phone);
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  // ========== UPDATE METHODS ==========

  updateUserById: async (req, res) => {
    try {
      const user = await userRepo.updateUserById(req.params.id, req.body);
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  updateUserByEmail: async (req, res) => {
    try {
      const user = await userRepo.updateUserByEmail(req.params.email, req.body);
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  updateUserByUsername: async (req, res) => {
    try {
      const user = await userRepo.updateUserByUsername(
        req.params.username,
        req.body
      );
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  updateUserByPhone: async (req, res) => {
    try {
      const user = await userRepo.updateUserByPhoneNumber(
        req.params.phone,
        req.body
      );
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  },

  // ========== DELETE METHODS ==========

  deleteUserById: async (req, res) => {
    try {
      const result = await userRepo.deleteUserById(req.params.id);
      res.json({ success: true, message: "User deleted", data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  deleteUserByEmail: async (req, res) => {
    try {
      const result = await userRepo.deleteUserByEmail(req.params.email);
      res.json({ success: true, message: "User deleted", data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  deleteUserByUsername: async (req, res) => {
    try {
      const result = await userRepo.deleteUserByUsername(req.params.username);
      res.json({ success: true, message: "User deleted", data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },

  uploadProfilePic: async (req, res) => {
    try {
      const userId = req.user.id; // ✅ Extracted from the auth middleware
      const filePath = req.file?.path;

      const updatedUser = await userRepo.uploadProfilePic(userId, filePath); // ✅ Use repo method

      res.status(200).json({
        success: true,
        message: "Profile picture uploaded successfully",
        profilePath: filePath,
        user: updatedUser,
      });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Failed to upload profile picture" });
    }
  },
  deleteUserByPhone: async (req, res) => {
    try {
      const result = await userRepo.deleteUserByPhoneNumber(req.params.phone);
      res.json({ success: true, message: "User deleted", data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  },
});

module.exports = AuthController;
