// Ejercicio 7: Login simple
let usuario = prompt("Usuario:");
let clave = prompt("Clave:");
if (usuario === "admin" && clave === "1234") {
  console.log("Bienvenido/a");
} else {
  console.log("Usuario o clave incorrectos");
}