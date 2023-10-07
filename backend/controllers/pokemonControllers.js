import { asyncHandler } from "../middleware/asyncHandler.js";
import Pokedex from "../models/pokedex.js";

//@desc Get all pokemons
//@route GET /api/pokemon
//@access Public
const getPokemons = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Pokedex.countDocuments({}).maxTimeMS(15000);

  const pokemons = await Pokedex.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .maxTimeMS(15000);

  res.status(200).json({ pokemons, page, pages: Math.ceil(count / pageSize) });
});

export { getPokemons };
