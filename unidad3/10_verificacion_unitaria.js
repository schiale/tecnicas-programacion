// Verificación unitaria simple
function esPar(n) {
  return n % 2 === 0;
}

console.assert(esPar(4) === true, "4 debería ser par");
console.assert(esPar(5) === false, "5 debería ser impar");

function sumar(a, b) {
  return a + b;
}

console.assert(sumar(2, 3) === 5, "2 + 3 debe ser 5");