import express from "express";
const router = express.Router();
import { getPokemons } from "../controllers/pokemonControllers.js";

router.route("/").get(getPokemons);
router.route("/:id").get().put().delete();

export default router;
