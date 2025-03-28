// Ejercicio 9: Promedio de tres notas
let n1 = parseFloat(prompt("Nota 1:"));
let n2 = parseFloat(prompt("Nota 2:"));
let n3 = parseFloat(prompt("Nota 3:"));
let promedio = (n1 + n2 + n3) / 3;
console.log("Promedio:", promedio);
if (promedio >= 6) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}