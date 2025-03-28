// Crear una clase Persona con propiedades y métodos
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
  }
}

let persona1 = new Persona("Lucía", 30);
persona1.saludar();