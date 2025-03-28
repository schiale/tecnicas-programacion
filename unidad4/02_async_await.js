// EJERCICIO 2: Primer uso de async/await
// Objetivo: Reescribir el ejercicio anterior usando funciones asincrónicas

async function obtenerCuriosidadGato() {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    console.log("Curiosidad asincrónica:", data.fact);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerCuriosidadGato();
