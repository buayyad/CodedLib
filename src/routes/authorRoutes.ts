import { Router } from "express";
import {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthorName,
  deleteAuthor,
} from "../controllers/authorController";

const router = Router();

router.get("/authors", getAuthors);
router.get("/authors/:id", getAuthorById);
router.post("/authors", createAuthor);
router.put("/authors/:id", updateAuthorName);
router.delete("/authors/:id", deleteAuthor);

export default router;
