// Contar cuántas veces aparece una letra
let palabra = prompt("Ingresá una palabra:");
let letra = prompt("Letra a contar:");
let contador = 0;
for (let char of palabra.toLowerCase()) {
  if (char === letra.toLowerCase()) contador++;
}
console.log("Cantidad:", contador);