// EJERCICIO 6: Fetch con parámetros dinámicos
// Objetivo: Obtener un usuario por ID usando template literals

async function obtenerUsuarioPorId(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    console.log(`Usuario ${id}:`, user.name, "-", user.email);
  } catch (error) {
    console.error("Error al obtener usuario:", error.message);
  }
}

obtenerUsuarioPorId(4);
