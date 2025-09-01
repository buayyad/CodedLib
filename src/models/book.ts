import mongoose, { Schema } from "mongoose";

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

export const Book = mongoose.model("Book", BookSchema);
