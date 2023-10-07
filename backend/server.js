import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import pokemonRoutes from "./routes/pokemonRoutes.js";
import { connectDB } from "./config/db.js";
const port = process.env.PORT || 5000;
const app = express();

connectDB(); //connect to db

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser);

app.use("/api/pokemon", pokemonRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server port is running in ${port}`));
