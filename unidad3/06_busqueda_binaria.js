// Implementar búsqueda binaria
function busquedaBinaria(arr, valor) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    if (arr[medio] === valor) return medio;
    if (arr[medio] < valor) inicio = medio + 1;
    else fin = medio - 1;
  }

  return -1;
}

let numeros = [1, 3, 5, 7, 9];
console.log("Posición de 5:", busquedaBinaria(numeros, 5));