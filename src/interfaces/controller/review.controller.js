// 📁 src/interfaces/controllers/review.controller.js
const ReviewController = (useCases) => ({
  create: async (req, res) => {
    try {
      const review = await useCases.createReview(req.body);
      res.status(201).json({
        success: true,
        message: "Review Created Successfully",
        review,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
  getAll: async (_req, res) => {
    try {
      const reviews = await useCases.getAllReviews();
      res.status(200).json({
        success: true,
        message: "Reviews Fetched Successfully",
        reviews,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const review = await useCases.getReviewById(req.params.id);
      res
        .status(200)
        .json({ success: true, message: "Review Fetched", review });
    } catch (err) {
      res.status(404).json({ success: false, message: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const review = await useCases.updateReviewById(req.params.id, req.body);

      if (!review) {
        return res
          .status(404)
          .json({ success: false, message: "Review not found" });
      }

      res.status(200).json({
        success: true,
        message: "Review Updated Successfully",
        review,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
  remove: async (req, res) => {
    try {
      await useCases.deleteReviewById(req.params.id);
      res
        .status(200)
        .json({ success: true, message: "Review Deleted Successfully" });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
});

module.exports = ReviewController;
