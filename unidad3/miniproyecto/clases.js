// Clase base Persona
class Persona {
    constructor(nombre, dni) {
      this.nombre = nombre;
      this.dni = dni;
    }
  
    presentarse() {
      console.log(`Hola, soy ${this.nombre} y mi DNI es ${this.dni}.`);
    }
  }
  
  // Clase Estudiante que hereda de Persona
  class Estudiante extends Persona {
    #notas = [];
  
    constructor(nombre, dni, carrera, legajo) {
      super(nombre, dni); // Llama al constructor de Persona
      this.carrera = carrera;
      this.legajo = legajo;
    }
  
    agregarNota(nota) {
      if (nota >= 1 && nota <= 10) {
        this.#notas.push(nota);
      } else {
        console.log("La nota debe estar entre 1 y 10.");
      }
    }
  
    obtenerPromedio() {
      if (this.#notas.length === 0) return 0;
      const suma = this.#notas.reduce((acc, val) => acc + val, 0);
      return (suma / this.#notas.length).toFixed(2);
    }
  
    mostrarDatos() {
      console.log("----- Estudiante -----");
      this.presentarse();
      console.log(`Legajo: ${this.legajo}`);
      console.log(`Carrera: ${this.carrera}`);
      console.log(`Notas: ${this.#notas.join(", ")}`);
      console.log(`Promedio: ${this.obtenerPromedio()}`);
      console.log("----------------------\n");
    }
  }
  
  // Clase Carrera
  class Carrera {
    constructor(nombre, duracion) {
      this.nombre = nombre;
      this.duracion = duracion; // en años
    }
  
    static compararDuracion(c1, c2) {
      if (c1.duracion > c2.duracion) {
        console.log(`${c1.nombre} dura más que ${c2.nombre}.`);
      } else if (c1.duracion < c2.duracion) {
        console.log(`${c2.nombre} dura más que ${c1.nombre}.`);
      } else {
        console.log(`${c1.nombre} y ${c2.nombre} tienen la misma duración.`);
      }
    }
  }
  
  // Clase Curso que agrupa estudiantes
  class Curso {
    constructor(nombreCurso) {
      this.nombreCurso = nombreCurso;
      this.estudiantes = [];
    }
  
    inscribir(estudiante) {
      this.estudiantes.push(estudiante);
      console.log(`Estudiante ${estudiante.nombre} inscrito en ${this.nombreCurso}.`);
    }
  
    mostrarEstudiantes() {
      console.log(`\n📚 Estudiantes en ${this.nombreCurso}:`);
      this.estudiantes.forEach((est) => est.mostrarDatos());
    }
  
    promedioGeneral() {
      if (this.estudiantes.length === 0) return 0;
      const sumaPromedios = this.estudiantes.reduce((acc, est) => acc + parseFloat(est.obtenerPromedio()), 0);
      return (sumaPromedios / this.estudiantes.length).toFixed(2);
    }
  }
  