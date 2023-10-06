import mongoose from "mongoose";

const pokedexEntrySchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  type: {
    type: [String],
    required: true,
  },
  base: {
    HP: Number,
    Attack: Number,
    Defense: Number,
    'Sp. Attack': Number,
    'Sp. Defense': Number,
    Speed: Number,
  },
  // Add other fields as needed
});

const Pokedex = mongoose.model('PokedexEntry', pokedexEntrySchema);

export default Pokedex;
