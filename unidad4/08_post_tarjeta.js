// Crear una tarjeta con un post aleatorio
async function tarjetaPost() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await res.json();
    console.log("Título:", post.title);
    console.log("Contenido:", post.body);
  } catch (error) {
    console.error("Error al obtener post:", error);
  }
}
tarjetaPost();