// EJERCICIO 10: Solicitar input y usarlo en la API
// Objetivo: Permitir personalización de la consulta con formulario

document.getElementById("buscarBtn").addEventListener("click", async () => {
  const nombre = document.getElementById("nombrePokemon").value;
  const resultado = document.getElementById("resultado");

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);
    const data = await res.json();
    resultado.innerHTML = `
      <h3>${data.name}</h3>
      <p>Altura: ${data.height}</p>
      <p>Peso: ${data.weight}</p>
    `;
  } catch (error) {
    resultado.innerHTML = "<p style='color:red;'>No se encontró el Pokémon.</p>";
  }
});