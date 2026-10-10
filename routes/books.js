import express from "express";
import book from "../controllers/bookController.js";

const router = express.Router();

router.get("/books", book.index);
router.post("/books", book.insert);
router.get("/books/:id", book.getBook);
router.post("/books/:id", book.update);
router.post("/books/:id/delete", book.delete);

export default router;