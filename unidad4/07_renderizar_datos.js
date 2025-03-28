// EJERCICIO 7: Renderizar contenido en HTML
// Objetivo: Mostrar datos API en el documento HTML

async function mostrarPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await res.json();

  const contenedor = document.getElementById("post");
  contenedor.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
  `;
}

mostrarPost();