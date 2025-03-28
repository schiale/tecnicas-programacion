// EJERCICIO 8: Ejecutar múltiples llamadas en paralelo
// Objetivo: Usar Promise.all para eficiencia

async function obtenerParalelo() {
  try {
    const urls = [
      "https://catfact.ninja/fact",
      "https://catfact.ninja/fact",
      "https://catfact.ninja/fact"
    ];
    const respuestas = await Promise.all(urls.map(url => fetch(url).then(r => r.json())));
    respuestas.forEach((fact, index) => {
      console.log(`Curiosidad ${index + 1}:`, fact.fact);
    });
  } catch (error) {
    console.error("Error en ejecución paralela:", error);
  }
}

obtenerParalelo();
