// Mostrar los títulos de los primeros 5 posts
async function mostrarTitulos() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const data = await res.json();
    data.forEach(post => console.log(post.title));
  } catch (error) {
    console.error("Error al obtener posts:", error);
  }
}
mostrarTitulos();