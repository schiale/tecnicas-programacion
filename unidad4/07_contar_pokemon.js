// Contar cuántos Pokémon hay en total
async function contarPokemon() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();
    console.log("Total de Pokémon:", data.count);
  } catch (error) {
    console.error("Error al contar Pokémon:", error);
  }
}
contarPokemon();