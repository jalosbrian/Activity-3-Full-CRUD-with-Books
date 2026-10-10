import { Review } from "../models/reviewModel.js";

const reviewController = {
  getAll: async (req, res) => {
    try {
      const reviews = await Review.findAll();
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const { reviewerName, rating, comment, productId, isApproved } = req.body;
      const review = await Review.create({ reviewerName, rating, comment, productId, isApproved });
      res.json(review);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

export default reviewController;