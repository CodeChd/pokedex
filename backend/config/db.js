import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const env = process.env.MOGO_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(env, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
