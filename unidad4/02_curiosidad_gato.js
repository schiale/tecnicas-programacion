// Obtener una curiosidad sobre gatos
async function curiosidadGato() {
  try {
    const res = await fetch('https://catfact.ninja/fact');
    const data = await res.json();
    console.log("Curiosidad:", data.fact);
  } catch (error) {
    console.error("Error al obtener dato del gato:", error);
  }
}
curiosidadGato();