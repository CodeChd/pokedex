import { asyncHandler } from "../middleware/asyncHandler.js";
import Pokedex from "../models/pokedex.js";

//@desc Get all pokemons
//@route GET /api/pokemon
//@access Public
const getPokemons = asyncHandler(async (req, res) => {
  const pageSize = 8;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: "i" } }
    : {};

  const count = await Pokedex.countDocuments({ ...keyword }).maxTimeMS(15000);

  const pokemons = await Pokedex.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .maxTimeMS(15000);

  res.status(200).json({ pokemons, page, pages: Math.ceil(count / pageSize) });
});

export { getPokemons };
