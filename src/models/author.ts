import mongoose, { Schema } from "mongoose";

const AuthorSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

export const Author = mongoose.model("Author", AuthorSchema);
