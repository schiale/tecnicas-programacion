//Programación modular
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
  
function mostrarResultado(area) {
    console.log("El área del triángulo es:", area);
}
  
let resultado = calcularAreaTriangulo(5, 3);
mostrarResultado(resultado);
  
//Clases
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre; // propiedad
    this.edad = edad;     // propiedad
  }

  saludar() {
    // método
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

//Instancia
let persona1 = new Persona("Ana", 25);
persona1.saludar(); // Hola, me llamo Ana y tengo 25 años

//Herencia
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad); // llama al constructor de la clase padre
        this.carrera = carrera; // nueva propiedad específica de Estudiante
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.carrera}.`);
    }
}
  
let alumno = new Estudiante("Juan", 20, "Programación");
alumno.saludar();   // Heredado de Persona
alumno.estudiar();  // Método propio de Estudiante
  
//Encapsulamiento
class CuentaBancaria {
  #saldo;

  constructor(titular, saldoInicial) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  consultarSaldo() {
    return this.#saldo;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
    }
  }
}

let cuenta = new CuentaBancaria("Lucía", 1000);
console.log(cuenta.consultarSaldo()); // 1000
cuenta.depositar(500);
console.log(cuenta.consultarSaldo()); // 1500
console.log(cuenta.#saldo); // Error: propiedad privada

//Metodos estaticos
class Calculadora {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Calculadora.sumar(4, 5)); // 9

//Getters y setters
class Producto {
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre.toUpperCase();
  }

  get precio() {
    return this._precio;
  }

  set precio(nuevoPrecio) {
    if (nuevoPrecio >= 0) {
      this._precio = nuevoPrecio;
    }
  }
}

let p = new Producto("camisa", 1500);
console.log(p.nombre); // camisa
p.nombre = "pantalón";
console.log(p.nombre); // PANTALÓN

//Algoritmos eficientes
// ❌ Código ineficiente
function sumaLenta(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 1; j++) { // bucle innecesario
      suma += arr[i];
    }
  }
  return suma;
}

// ✅ Código eficiente
function sumaRapida(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}


// Ineficiente
for (let i = 0; i < arr.length; i++) {
  let largo = arr.length; // Se calcula en cada iteración
  // ...
}

// Eficiente
let largo = arr.length;
for (let i = 0; i < largo; i++) {
  // ...
}


// Ineficiente: dos recorridos
let mayores = arr.filter(x => x > 10);
let suma = mayores.reduce((acc, val) => acc + val, 0);

// Eficiente: una sola pasada
let suma = 0;
for (let x of arr) {
  if (x > 10) suma += x;
}

// Ejemplo con Set
let valores = [1, 2, 2, 3];
let unicos = new Set(valores); // Set {1, 2, 3}


function procesarNotas(notas) {
  const promedio = calcularPromedio(notas);
  const aprobadas = filtrarAprobadas(notas);
  return { promedio, aprobadas };
}

function calcularPromedio(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function filtrarAprobadas(arr) {
  return arr.filter(n => n >= 6);
}

let edades = [20, 22, 18, 25];
let suma = 0;
for (let edad of edades) {
  suma += edad;
}
let promedio = suma / edades.length;
console.log("Promedio:", promedio);

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
  
function buscar(lista, valor) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === valor) return i;
    }
    return -1;
}

function busquedaBinaria(arr, valor) {
    let inicio = 0;
    let fin = arr.length - 1;
    while (inicio <= fin) {
      let medio = Math.floor((inicio + fin) / 2);
      if (arr[medio] === valor) return medio;
      if (arr[medio] < valor) inicio = medio + 1;
      else fin = medio - 1;
    }
    return -1;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
}

// O(n²)
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // se ejecuta n² veces
    }
}
  
// O(n)
for (let i = 0; i < n; i++) {
    // se ejecuta n veces
}

function esPar(n) {
    return n % 2 === 0;
}
  
console.assert(esPar(4) === true, "4 debería ser par");
console.assert(esPar(5) === false, "5 debería ser impar");
  
  
  

