// src/infrastructure/database/models/UserModel.js

const mongoose = require("mongoose");

const options = {
  discriminatorKey: "type", // will only activate for ServiceProvider
  timestamps: true,
};

const UserSchema = new mongoose.Schema(
  {
    userId: String,
    fullname: String,
    username: String,
    email: { type: String, unique: true },
    password: String,
    address: String,
    ctznNo: String,
    country: String,
    province: String,
    city: String,
    phonenumber: String,
    role: {
      type: String,
      enum: ["Customer", "ServiceProvider", "Admin", "User"],
      default: "User",
    },
    profilepic: String,
    status: { type: String, default: "Active" },
    rating: Number,

    // Login Tracking
    lastLogin: Date,
    lastLoginIp: String,
    lastLoginLocation: String,
    lastLoginDevice: String,

    // Service Tracking
    totalServiceRequests: Number,
    totalServiceCompleted: Number,
    totalServiceCancelled: Number,
    totalServicePending: Number,
    totalServiceInProgress: Number,
  },
  options
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
