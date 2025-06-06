// src/infrastructure/database/models/ServiceProviderModel.js

const mongoose = require("mongoose");
const User = require("./user.models");

const ServiceProviderSchema = new mongoose.Schema({
  experienceYears: Number,
  shopName: String,
  shopLocation: String,
  minimumCharge: Number,
  serviceCompleted: Number,
  csatscore: Number,
  isServiceVerified: { type: Boolean, default: false },
  serviceType: [String],
  serviceField: String,
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: String,
      ratingStar: Number,
    },
  ],
});

const ServiceProvider = User.discriminator(
  "ServiceProvider",
  ServiceProviderSchema
);
module.exports = ServiceProvider;
