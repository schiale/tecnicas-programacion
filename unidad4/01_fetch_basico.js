// EJERCICIO 1: Primer fetch sin await
// Objetivo: Realizar una petición simple y procesar la respuesta con .then()

fetch("https://catfact.ninja/fact")
  .then(response => response.json())
  .then(data => {
    console.log("Dato curioso sobre gatos:", data.fact);
  })
  .catch(error => console.error("Error al obtener el dato:", error));
