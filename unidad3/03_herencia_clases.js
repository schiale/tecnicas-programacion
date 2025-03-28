// Crear una clase Estudiante que hereda de Persona
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    console.log(`Soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad);
    this.carrera = carrera;
  }

  estudiar() {
    console.log(`${this.nombre} estudia ${this.carrera}.`);
  }
}

let estudiante1 = new Estudiante("Marcos", 22, "IA");
estudiante1.presentarse();
estudiante1.estudiar();