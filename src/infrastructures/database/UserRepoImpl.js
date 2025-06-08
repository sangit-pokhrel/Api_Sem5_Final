// src/infrastructure/database/UserRepoImpl.js

const User = require("./model/user.models");
const ServiceProvider = require("./model/serviceProvider.models");
const UserRepository = require("../../domain/repositories/user.repository");

// Only ServiceProvider is a real discriminator
const getModelByRole = (role) =>
  role === "ServiceProvider" ? ServiceProvider : User;

module.exports = {
  // ====== CREATE Methods ======
  createUserById: async (id, user) => {
    user._id = id;
    return await getModelByRole(user.role).create(user);
  },
  uploadProfilePic: async (id, filePath) => {
    return await getModelByRole("User").findByIdAndUpdate(
      id,
      { profilepic: filePath },
      { new: true }
    );
  },
  createUserByEmail: async (email, user) => {
    user.email = email;
    return await getModelByRole(user.role).create(user);
  },

  createUserByUsername: async (username, user) => {
    user.username = username;
    return await getModelByRole(user.role).create(user);
  },

  createUserByPhoneNumber: async (phoneNumber, user) => {
    user.phonenumber = phoneNumber;
    return await getModelByRole(user.role).create(user);
  },

  createUser: async (user) => {
    return await getModelByRole(user.role).create(user);
  },

  

  // ====== GET Methods ======
  findByEmail: async (email) => await User.findOne({ email }),

  getAllUsers: async () => await User.find(),

  getAllUsersByRole: async (role) => await User.find({ role }),

  getAllUsersByStatus: async (status) => await User.find({ status }),

  getUserById: async (id) => await User.findById(id),

  getUserByEmail: async (email) => await User.findOne({ email }),

  getUserByUsername: async (username) => await User.findOne({ username }),

  getUserByPhoneNumber: async (phoneNumber) =>
    await User.findOne({ phonenumber: phoneNumber }),

  // ====== UPDATE Methods ======
  updateUserById: async (id, user) =>
    await User.findByIdAndUpdate(id, user, { new: true }),

  updateUserByEmail: async (email, user) =>
    await User.findOneAndUpdate({ email }, user, { new: true }),

  updateUserByUsername: async (username, user) =>
    await User.findOneAndUpdate({ username }, user, { new: true }),

  updateUserByPhoneNumber: async (phoneNumber, user) =>
    await User.findOneAndUpdate({ phonenumber: phoneNumber }, user, {
      new: true,
    }),

  // ====== DELETE Methods ======
  deleteUserById: async (id) => await User.findByIdAndDelete(id),

  deleteUserByEmail: async (email) => await User.findOneAndDelete({ email }),

  deleteUserByUsername: async (username) =>
    await User.findOneAndDelete({ username }),

  deleteUserByPhoneNumber: async (phoneNumber) =>
    await User.findOneAndDelete({ phonenumber: phoneNumber }),

  //forget password api impl here ----------------------->
  findByRoleAndPhone: async (role, phone) => {
    return await getModelByRole(role).findOne({ phonenumber: phone });
  },

  findByRoleAndEmail: async (role, email) => {
    return await getModelByRole(role).findOne({ email });
  },

 updatePasswordById: async (role, userId, hashedPassword) => {
  const model = getModelByRole(role);
  return await model.findByIdAndUpdate(
    userId,
    { password: hashedPassword },
    { new: true }
  );
}
};
