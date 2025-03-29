
fetch('https://api.example.com/datos')
  .then(response => response.json())
  .then(data => {
    console.log("Datos recibidos:", data);
  })
  .catch(error => {
    console.error("Error al obtener datos:", error);
  });


async function obtenerUsuario() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const datos = await respuesta.json();
    console.log("Usuario:", datos.name);
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

obtenerUsuario();
