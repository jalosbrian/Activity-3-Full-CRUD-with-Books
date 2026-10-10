import { Book } from "../models/bookModel.js";

const bookController = {
  index: async (req, res) => {
    const books = await Book.findAll({ raw: true });
    const numbered = books.map((b, i) => ({ ...b, no: i + 1 }));
    res.render("books", { books: numbered });
  },
  insert: async (req, res) => {
    const { title, author, genre, price, stock } = req.body;
    await Book.create({ title, author, genre, price, stock });
    res.redirect("/books");
  },
  getBook: async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.redirect("/books");
    res.render("book-edit", { book: book.toJSON() });
  },
  update: async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      const { title, author, genre, price, stock } = req.body;
      await book.update({ title, author, genre, price, stock });
    }
    res.redirect("/books");
  },
  delete: async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (book) await book.destroy();
    res.redirect("/books");
  },
};

export default bookController;