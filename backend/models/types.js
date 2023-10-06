import mongoose from "mongoose";

const typesSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
});

const Type = mongoose.model("Type", typesSchema);

export default Type;
