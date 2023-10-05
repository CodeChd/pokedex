import { connectDB } from "./config/db.js";
import Pokedex from "./models/pokedex.js";
import Type from "./models/types.js";
import pokedex from "./data/pokemonLists/pokedex.json";
import types from "./data/pokemonTypes/types.json";

// JSON DATA
const pokdexData = JSON.parse(pokedex);
const typesData = JSON.parse(types);

connectDB(); // connect to database

const ImportData = async () => {
  try {
    await Pokedex.deleteMany({});
    await Type.deleteMany({});

    //return new array with modified json data
    const pokedexModified = pokdexData.map((item) => ({
      name: item.name.english,
      type: item.type,
      base: item.base,
    }));

    const typesModified = typesData.map((item) => item.english);

    //Upload to db
    await Pokedex.insertMany(pokedexModified);
    await Type.insertMany(typesModified);

    console.log("Data Imported");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Pokedex.deleteMany({});
    await Type.deleteMany({});
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  ImportData();
}
