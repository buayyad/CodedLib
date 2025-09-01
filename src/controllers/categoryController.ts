import { Request, Response, NextFunction } from "express";
import { Category } from "../models/category";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.create({
      name: req.body.name,
      books: req.body.books || [],
    });
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
};

export const updateCategoryName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Category deleted" });
  } catch (error) {
    next(error);
  }
};
