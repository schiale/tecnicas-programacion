// EJERCICIO 4: Realizar múltiples llamadas asincrónicas
// Objetivo: Hacer 3 requests secuenciales con await

async function obtenerMultiplesCuriosidades() {
  for (let i = 1; i <= 3; i++) {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    console.log(`Curiosidad ${i}:`, data.fact);
  }
}

obtenerMultiplesCuriosidades();
