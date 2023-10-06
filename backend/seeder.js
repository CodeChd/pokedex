import { connectDB } from "./config/db.js";
import Pokedex from "./models/pokedex.js";
import Type from "./models/types.js";
// JSON DATA
import pokedexJson from "./data/pokedex.json" assert { type: "json" };
import typesJson from "./data/types.json" assert { type: "json" };

const ImportData = async () => {
  try {
    await connectDB(); // connect to database
    await Pokedex.deleteMany({});
    await Type.deleteMany({});

    //return new array with modified json data
    const pokedexModified = pokedexJson.map((item) => {
      return {
        name: item.name.english,
        type: item.type,
        base: item.base,
        // Generate the image path based on the ID
        image: `./images/${String(item.id).padStart(3, "0")}.png`,
      };
    });

    const typesModified = typesJson.map((item) => {
      return { type: item.english };
    });

    //Upload to db
    await Pokedex.insertMany(pokedexModified);
    await Type.insertMany(typesModified);

    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB(); // connect to database
    await Pokedex.deleteMany({});
    await Type.deleteMany({});
    console.log("Data Destroyed");
    process.exit();
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
