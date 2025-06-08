// 📁 src/infrastructure/database/reviewRepoImpl.js
const Review = require("./model/review.model");

module.exports = {
  createReview: async (data) => await Review.create(data),
  getAllReviews: async () =>
    await Review.find().populate("userId", "fullname email"),
  getReviewById: async (id) =>
    await Review.findById(id).populate("userId", "fullname email"),
  updateReviewById: async (id, data) =>
    await Review.findByIdAndUpdate(id, data, { new: true }),
  deleteReviewById: async (id) => await Review.findByIdAndDelete(id),
};
