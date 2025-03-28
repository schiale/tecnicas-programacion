// EJERCICIO 3: Diferencia entre ejecución sincrónica y asincrónica
// Objetivo: Mostrar cómo el asincronismo no bloquea la ejecución del resto del código

console.log("Inicio del programa");

fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(data => console.log("Imagen recibida:", data.message));

console.log("Fin del programa (antes de la imagen)");
