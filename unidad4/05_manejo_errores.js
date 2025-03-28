// EJERCICIO 5: Manejo de errores de red
// Objetivo: Simular una URL inválida y capturar el error

async function apiFallida() {
  try {
    const res = await fetch("https://api.inventada.com/data");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("¡Error al hacer fetch!:", error.message);
  }
}

apiFallida();
