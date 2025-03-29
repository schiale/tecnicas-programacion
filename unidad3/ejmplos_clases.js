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