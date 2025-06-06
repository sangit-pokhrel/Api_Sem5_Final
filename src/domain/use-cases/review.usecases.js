// 📁 src/domain/use-cases/review.usecases.js
module.exports = (reviewRepo) => ({
  createReview: async (data) => await reviewRepo.createReview(data),
  getAllReviews: async () => await reviewRepo.getAllReviews(),
  getReviewById: async (id) => await reviewRepo.getReviewById(id),
  updateReviewById: async (id, data) =>
    await reviewRepo.updateReviewById(id, data),
  deleteReviewById: async (id) => await reviewRepo.deleteReviewById(id),
});
