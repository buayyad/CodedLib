import { Router } from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController";
import { upload } from "../middlewares/upload";

const router = Router();

router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post("/books", upload.single("coverImage"), createBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

export default router;
