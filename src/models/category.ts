import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
  name: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

export const Category = mongoose.model("Category", CategorySchema);
