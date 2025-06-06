// src/domain/use-cases/authUseCases.js

/**
 * Auth & User Management Use Cases
 * @param {Object} userRepo - Repository for user DB operations
 * @param {Object} hashService - Service to hash and compare passwords
 * @param {Object} tokenService - Service to generate tokens
 */
module.exports = (userRepo, hashService, tokenService) => ({
  register: async (data) => {
    try {
      const existingUser = await userRepo.findByEmail(data.email);
      if (existingUser) {
        throw new Error("Email already exists");
      }

      const hashedPassword = await hashService.hash(data.password);
      const newUser = await userRepo.createUser({
        ...data,
        role: "User",
        password: hashedPassword,
      });

      const token = tokenService.generate({
        id: newUser._id,
        role: newUser.role,
      });

      return {
        token,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          fullname: newUser.fullname,
          role: newUser.role,
        },
      };
    } catch (error) {
      throw new Error(`Registration failed: ${error.message}`);
    }
  },

  login: async ({ email, password }) => {
    try {
      const user = await userRepo.findByEmail(email);
      if (!user) throw new Error("User not found");

      const isPasswordValid = await hashService.compare(
        password,
        user.password
      );
      if (!isPasswordValid) throw new Error("Invalid credentials");

      const token = tokenService.generate({ id: user._id, role: user.role });

      return {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          fullname: user.fullname,
          role: user.role,
        },
      };
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  },

  // =====================
  // ✅ Full CRUD methods
  // =====================

  createUser: async (data) => await userRepo.createUser(data),
  createUserById: async (id, user) => await userRepo.createUserById(id, user),
  createUserByEmail: async (email, user) =>
    await userRepo.createUserByEmail(email, user),
  createUserByUsername: async (username, user) =>
    await userRepo.createUserByUsername(username, user),
  createUserByPhoneNumber: async (phone, user) =>
    await userRepo.createUserByPhoneNumber(phone, user),

  getAllUsers: async () => await userRepo.getAllUsers(),
  getUsersByRole: async (role) => await userRepo.getAllUsersByRole(role),
  getUsersByStatus: async (status) =>
    await userRepo.getAllUsersByStatus(status),
  getUserById: async (id) => await userRepo.getUserById(id),
  getUserByEmail: async (email) => await userRepo.getUserByEmail(email),
  getUserByUsername: async (username) =>
    await userRepo.getUserByUsername(username),
  getUserByPhone: async (phone) => await userRepo.getUserByPhoneNumber(phone),

  updateUserById: async (id, user) => await userRepo.updateUserById(id, user),
  updateUserByEmail: async (email, user) =>
    await userRepo.updateUserByEmail(email, user),
  updateUserByUsername: async (username, user) =>
    await userRepo.updateUserByUsername(username, user),
  updateUserByPhone: async (phone, user) =>
    await userRepo.updateUserByPhoneNumber(phone, user),

  deleteUserById: async (id) => await userRepo.deleteUserById(id),
  deleteUserByEmail: async (email) => await userRepo.deleteUserByEmail(email),
  deleteUserByUsername: async (username) =>
    await userRepo.deleteUserByUsername(username),
  deleteUserByPhone: async (phone) =>
    await userRepo.deleteUserByPhoneNumber(phone),
});
