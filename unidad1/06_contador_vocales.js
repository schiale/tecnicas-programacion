// Ejercicio 6: Contar vocales en una palabra
let palabra = prompt("Ingresá una palabra:");
let contador = 0;
for (let letra of palabra.toLowerCase()) {
  if ("aeiou".includes(letra)) contador++;
}
console.log("Cantidad de vocales:", contador);