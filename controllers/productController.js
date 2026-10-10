import { Product } from "../models/productModel.js";

const productController = {
  getAll: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const { name, description, category, price, stock } = req.body;
      const product = await Product.create({ name, description, category, price, stock });
      res.json(product);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  update: async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    const { name, description, category, price, stock } = req.body;
    await product.update({ name, description, category, price, stock });
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message || String(err) });
  }
},
  remove: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) return res.status(404).json({ error: "Product not found" });
      await product.destroy();
      res.json({ message: "Product deleted" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};

export default productController;