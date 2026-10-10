import express from "express";
import userController from "../controllers/userController.js";
import orderController from "../controllers/orderController.js";
import productController from "../controllers/productController.js";
import categoryController from "../controllers/categoryController.js";
import reviewController from "../controllers/reviewController.js";

const router = express.Router();

// User routes
router.get("/users", userController.getAll);
router.post("/users", userController.create);

// Order routes
router.get("/orders", orderController.getAll);
router.post("/orders", orderController.create);

// Product routes
router.get("/products", productController.getAll);
router.post("/products", productController.create);
router.put("/products/:id", productController.update);
router.delete("/products/:id", productController.remove);

// Category routes
router.get("/categories", categoryController.getAll);
router.post("/categories", categoryController.create);

// Review routes
router.get("/reviews", reviewController.getAll);
router.post("/reviews", reviewController.create);

export default router;