import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

import { errorHandler, notFound } from "./middleware/errorHandler.js";
import pokemonRoutes from "./routes/pokemonRoutes.js";
import { connectDB } from "./config/db.js";
const port = process.env.PORT || 5000;
const app = express();

connectDB(); //connect to db

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/pokemon", pokemonRoutes);       

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Api is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server port is running in ${port}`));
