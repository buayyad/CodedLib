import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/errorHandler";
import authorRoutes from "./routes/authorRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import bookRoutes from "./routes/bookRoutes";
import { connectToDatabase } from "./connection";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(errorHandler);

app.use(authorRoutes);
app.use(categoryRoutes);
app.use(bookRoutes);
app.use(notFound);

dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connectToDatabase();
