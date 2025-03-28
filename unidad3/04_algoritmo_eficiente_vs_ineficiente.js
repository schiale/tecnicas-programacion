// Comparar código ineficiente y eficiente
function sumaIneficiente(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 1; j++) {
      suma += arr[i];
    }
  }
  return suma;
}

function sumaEficiente(arr) {
  let suma = 0;
  for (let num of arr) {
    suma += num;
  }
  return suma;
}

let datos = [1, 2, 3, 4, 5];
console.log("Ineficiente:", sumaIneficiente(datos));
console.log("Eficiente:", sumaEficiente(datos));