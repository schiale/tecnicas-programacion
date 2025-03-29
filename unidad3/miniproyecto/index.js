// Crear carreras
const carreraIA = new Carrera("Inteligencia Artificial", 3);
const carreraDS = new Carrera("Data Science", 2);
Carrera.compararDuracion(carreraIA, carreraDS);

// Crear estudiantes
const e1 = new Estudiante("Lucía", "34567890", carreraIA.nombre, "2025A");
const e2 = new Estudiante("Pedro", "33222111", carreraDS.nombre, "2025B");

e1.agregarNota(8);
e1.agregarNota(9);
e1.agregarNota(10);

e2.agregarNota(7);
e2.agregarNota(6);
e2.agregarNota(8);

// Crear curso e inscribir estudiantes
const cursoPOO = new Curso("Programación Orientada a Objetos");
cursoPOO.inscribir(e1);
cursoPOO.inscribir(e2);

// Mostrar datos
cursoPOO.mostrarEstudiantes();
console.log(`Promedio general del curso: ${cursoPOO.promedioGeneral()}`);
