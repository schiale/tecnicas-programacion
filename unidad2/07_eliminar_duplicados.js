// Eliminar duplicados con Set
let palabras = ["sol", "luna", "sol", "mar", "luna"];
let unicas = [...new Set(palabras)];
console.log("Sin duplicados:", unicas);