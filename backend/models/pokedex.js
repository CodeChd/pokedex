import mongoose from "mongoose";

const pokedexSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: [String],
    required: true,
  },
  base: {
    HP: { type: Number, required: true },
    Attack: { type: Number, required: true },
    Defense: { type: Number, required: true },
    "Sp. Attack": { type: Number, required: true },
    "Sp. Defense": { type: Number, required: true },
    Speed: { type: Number, required: true },
  },
});

const Pokedex = mongoose.model("Pokedex", pokedexSchema);

export default Pokedex;
