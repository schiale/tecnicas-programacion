//Ejemplo inseguro:
let entrada = prompt("Ingresá una operación matemática:");
let resultado = eval(entrada);
console.log("Resultado:", resultado);

//Alternativa segura (sin eval())
let entrada1 = prompt("Ingresá un número:");
let numero = Number(entrada);

if (!isNaN(numero)) {
  console.log("El doble es:", numero * 2);
} else {
  console.log("Eso no es un número válido.");
}

//Ejemplo de error de redondeo:
let resultado1 = 0.1 + 0.2;
console.log(resultado); // 0.30000000000000004
//Soluciones comunes:
console.log((0.1 + 0.2).toFixed(2)); // "0.30"

//Arreglos
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[1]); // banana

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

for (let fruta of frutas) {
    console.log(fruta);
}

frutas.forEach(function(fruta) {
    console.log(fruta);
});

let enMayusculas = frutas.map(f => f.toUpperCase());
console.log(enMayusculas);

let filtradas = frutas.filter(f => f.includes("a"));

let total = [1, 2, 3].reduce((acc, num) => acc + num, 0);
  
  
  