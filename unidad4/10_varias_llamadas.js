// Obtener tres curiosidades sobre gatos
async function curiosidadesGatos() {
  try {
    for (let i = 0; i < 3; i++) {
      const res = await fetch('https://catfact.ninja/fact');
      const data = await res.json();
      console.log(`Curiosidad ${i + 1}:`, data.fact);
    }
  } catch (error) {
    console.error("Error al obtener curiosidades:", error);
  }
}
curiosidadesGatos();