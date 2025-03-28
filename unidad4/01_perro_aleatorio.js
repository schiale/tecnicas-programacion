// Mostrar imagen aleatoria de perro
async function mostrarPerro() {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    console.log("Imagen de perro:", data.message);
  } catch (error) {
    console.error("Error al obtener imagen de perro:", error);
  }
}
mostrarPerro();