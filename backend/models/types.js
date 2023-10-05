import mongoose from "mongoose";

const typeSchema = new mongoose.Schema({
  type: String,
});

const Type = mongoose.model("Type", typeSchema);

export default Type;
