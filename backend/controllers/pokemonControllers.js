import { asyncHandler } from "../middleware/asyncHandler.js";
import Pokedex from "../models/pokedex.js";

//@desc Get all pokemons
//@route GET /api/pokemon
//@access Public
const getPokemons = asyncHandler(async (req, res) => {
  const pageSize = 1;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Pokedex.countDocuments({});

  const pokemons = await Pokedex.find({})
    .sort({ name: 1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.status(200).json({ pokemons, page, page: Math.ceil(count / pageSize) });
});

export { getPokemons };
