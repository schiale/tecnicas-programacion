// Ejercicio 10: Simulador de cajero automático
let saldo = 10000;
let extraccion = parseFloat(prompt("Monto a extraer:"));
if (extraccion <= saldo) {
  saldo -= extraccion;
  console.log("Retiro exitoso. Saldo restante:", saldo);
} else {
  console.log("Fondos insuficientes.");
}