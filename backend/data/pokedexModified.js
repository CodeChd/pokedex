import pokedexJson from "./pokedex.json" assert { type: "json" };

export const pokedexModified = pokedexJson.map((item) => {
  return {
    id: item.id,
    name: item.name.english,
    type: item.type,
    base: item.base,
    // Generate the image path based on the ID
    image: `/images/${String(item.id).padStart(3, "0")}.png`,
  };
});
