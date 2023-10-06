import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // use .env value - MONGO_URI

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
