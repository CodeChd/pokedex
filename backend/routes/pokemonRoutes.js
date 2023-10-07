import express from "express";
const router = express.Router();
import { getPokemons } from "../controllers/pokemonControllers.js";

router.route("/").get(getPokemons);

export default router;
