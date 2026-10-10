import { Category } from "../models/categoryModel.js";

const categoryController = {
  getAll: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const { name, description, slug, isActive, sortOrder } = req.body;
      const category = await Category.create({ name, description, slug, isActive, sortOrder });
      res.json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

export default categoryController;