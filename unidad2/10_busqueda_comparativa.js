// Comparar búsquedas en array vs objeto
let nombres = ["Ana", "Luis", "Carlos"];
let edades = { Ana: 20, Luis: 22, Carlos: 19 };
console.log("Edad de Luis (objeto):", edades["Luis"]);
console.log("Está Luis en el array?", nombres.includes("Luis"));