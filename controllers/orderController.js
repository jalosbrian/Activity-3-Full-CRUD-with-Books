import { Order } from "../models/orderModel.js";

const orderController = {
  getAll: async (req, res) => {
    try {
      const orders = await Order.findAll();
      res.json(orders);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const order = await Order.create(req.body);
      res.json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

export default orderController;