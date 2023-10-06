import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config(); // use .env value - MONGO_URI

export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/pokedex"
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
