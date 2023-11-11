import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const env = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/pokedex";

export const connectDB = async () => {
  try {
    await mongoose.connect(env);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
