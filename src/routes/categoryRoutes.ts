import { Router } from "express";
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategoryName,
  deleteCategory,
} from "../controllers/categoryController";

const router = Router();

router.get("/categories", getCategories);
router.get("/categories/:id", getCategoryById);
router.post("/categories", createCategory);
router.put("/categories/:id", updateCategoryName);
router.delete("/categories/:id", deleteCategory);

export default router;
