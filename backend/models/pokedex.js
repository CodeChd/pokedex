import mongoose from "mongoose";

const pokedexEntrySchema = new mongoose.Schema(
  {
    pokemonId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    base: {
      HP: {
        type: Number,
        required: true,
      },
      Attack: {
        type: Number,
        required: true,
      },
      Defense: {
        type: Number,
        required: true,
      },
      "Sp. Attack": {
        type: Number,
        required: true,
      },
      "Sp. Defense": {
        type: Number,
        required: true,
      },
      Speed: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Pokedex = mongoose.model("Pokedex", pokedexEntrySchema);

export default Pokedex;
