// Mostrar índice de la primera vocal
let palabra = prompt("Ingresá una palabra:");
let vocales = "aeiou";
for (let i = 0; i < palabra.length; i++) {
  if (vocales.includes(palabra[i].toLowerCase())) {
    console.log("Primera vocal en índice:", i);
    break;
  }
}