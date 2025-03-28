// Ejercicio 8: Números primos del 1 al 100
for (let num = 2; num <= 100; num++) {
  let esPrimo = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) console.log(num);
}