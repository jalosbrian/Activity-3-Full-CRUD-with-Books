import { User } from "../models/userModel.js";

const userController = {
  getAll: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};

export default userController;