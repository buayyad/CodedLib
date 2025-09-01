import { Request, Response, NextFunction } from "express";
import { Author } from "../models/author";

export const createAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const author = await Author.create({
      name: req.body.name,
      country: req.body.country,
      books: req.body.books,
    });
    res.status(201).json(author);
  } catch (error) {
    next(error);
  }
};

export const getAuthors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authors = await Author.find().populate("books");
    res.json(authors);
  } catch (error) {
    next(error);
  }
};

export const getAuthorById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const author = await Author.findById(req.params.id).populate("books");
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.json(author);
  } catch (error) {
    next(error);
  }
};

export const updateAuthorName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.json(author);
  } catch (error) {
    next(error);
  }
};

export const deleteAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.json({ message: "Author deleted" });
  } catch (error) {
    next(error);
  }
};
