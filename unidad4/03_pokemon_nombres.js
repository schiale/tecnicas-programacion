// Listar nombres de los primeros 10 Pokémon
async function listarPokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await res.json();
    data.results.forEach(pokemon => console.log(pokemon.name));
  } catch (error) {
    console.error("Error al listar Pokémon:", error);
  }
}
listarPokemon();