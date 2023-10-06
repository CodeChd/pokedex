import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // use .env value - MONGO_URI

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pokedex");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
