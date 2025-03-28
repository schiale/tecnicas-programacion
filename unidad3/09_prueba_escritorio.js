// Simular suma con tabla (manual)
let numeros = [2, 4, 6];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  console.log(`i=${i}, suma=${suma}, numero=${numeros[i]}`);
  suma += numeros[i];
}
console.log("Total:", suma);