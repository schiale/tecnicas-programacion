// Comparar algoritmos O(n) vs. O(n²)
function lineal(arr) {
  for (let x of arr) {
    console.log("Elemento:", x);
  }
}

function cuadratico(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // Simulación de tarea costosa
    }
  }
  console.log("Fin de algoritmo cuadrático");
}

let datos = Array.from({length: 100}, (_, i) => i);
lineal(datos);
cuadratico(datos);