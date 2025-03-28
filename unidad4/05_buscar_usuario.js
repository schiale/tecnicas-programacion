// Buscar usuario por ID y mostrar nombre y email
async function buscarUsuario(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    console.log(`Nombre: ${user.name} - Email: ${user.email}`);
  } catch (error) {
    console.error("Error al buscar usuario:", error);
  }
}
buscarUsuario(3);