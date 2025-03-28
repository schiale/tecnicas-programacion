// Pedir nombres y ordenarlos alfabéticamente
let nombres = [];
for (let i = 0; i < 5; i++) {
  nombres.push(prompt("Ingresá un nombre:"));
}
nombres.sort();
console.log("Ordenados:", nombres);