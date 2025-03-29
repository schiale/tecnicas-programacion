//Calculo de promedio

let a = 8, b = 6, c = 10;
let promedio = (a + b + c) / 3;

console.log("El promedio es: ", promedio);

//Calculo factorial

function factorial (n) {
    let resultado  = 1;

    for (let i = 2; i < n; i++) {
        resultado *= i;
    }
    return resultado;
}

let n = prompt("Ingrese el numero a factorizar");
console.log("Factorial de " + n + " es " + factorial())

//Variables y constantes
//Variables (let o var)

//Booleanas (proposiciones)
let usuario_habilitado = false;
let enviar_emanil = true;

//String
var nombre_usuario = "Juan Carlos Perez";

//Enteros (int)
var edad_usuario = 25;

//Float (con decimales)
let peso_usuario = 80.5;

//Arreglos y objetos
//Arreglos  o listas
var maquinas_reservadas_usuario = [2,4,1,10];
let datos_envio_email = ['user@dominio.com', '17:00', 10.5]

//Objectos
let datos_usuario = {
                        'habilitado': usuario_habilitado,
                        'enviar_email': enviar_emanil,
                        'nombre': nombre_usuario,
                        'edad': edad_usuario,
                        'peso': peso_usuario,
                        'maquinas': maquinas_reservadas_usuario
                    }

//Expresiones y asignaciones
let total = precio * cantidad + impuesto;

let nombre = prompt("Como te llamas?")
console.log("Hola " + nombre + " el total calculado es " + total)

//Estructuras de control
//If, if/else, if/else if
let edad = prompt("Ingrese la edad del usuario ")

if(edad < 18){
    console.log("Disculpe, el usuario debe ser mayor de edad.")
} else if (edad >=18 && edad <= 30) {
    console.log("El usuario de registro dentro de la categoria 1")
} else if( edad > 30 && edad <= 50) {
    console.log("El usuario se registro dentro de la categoria 2") 
} else {
    console.log("El usuario se registro dentro de la categoria 3")
}

//Switch case

let codigo_pais = prompt("Ingrese codigo pais");

switch (codigo_pais) {
    case 'AR':
        console.log("Argenitna")
        break;
    case 'PY':
        console.log("Paraguay")
        break;
    case 'BR':
        console.log("Brasil")
        break;
    case 'PE':
        console.log("Peru")
        break;
    case 'UY':
        console.log("Uruguay")
        break;
    default:
        console.log("No se encontro el codigo de pais")
        break;
}

//Ciclos de repetición

//Ciclo for
//Estructura
for (let index = 0; index < 9; index++) {
    const element = index;
    
    console.log("Elemento " + element)
}

//Aplicación
let equipos = ["Talleres", "River", "Boca", "San Lorenzo", "Independiente", "Racing"]

for (let index = 0; index < equipos.length; index++) {
    const equipo = equipos[index];
    
    console.log("Equipo:", equipo)
}

//Ciclo map
let equipos_minuscula = equipos.map((equipo) => equipo.toLocaleLowerCase());

console.log("Equipos en minisculas", equipos_minuscula)

//Ciclo while
let accion1= "";

while (accion1 != "salir") {
    accion1 = prompt("Ingrese comando").toLocaleLowerCase();

    setInterval(() => {
        
    }, 1000);
};

// //Do-while
do {
   var accion2 = prompt("Ingrese comando").toLocaleLowerCase();

    setInterval(() => {
    }, 1000);
} while (accion2 != "salir");

//Funciones y pasaje de parametros
//Ejemplo sin funciones ---------------------------------------------------------
var users = []

let users_count = 4;

while (users_count > 0) {
    //Toma de valores
    let user_name = prompt("Ingrese nombre de usuario")
    let user_lastname = prompt("Ingrese nombre de apellido")
    let user_age = prompt("Ingrese nombre de edad")
    let user_weight = prompt("Ingrese nombre de peso")

    //Armado de nombre compelto
    let user_full_name = user_name + user_lastname;

    //Calculo de dias de vigencia
    let expires = Date.now() + 30;

    let user = {
                "full_name": user_full_name,
                "age": user_age,
                "weight": user_weight + "Kg",
                'expires': expires
    }

    users.push(user)

    setInterval(() => {
        
    }, 1000);
}

console.log("Usuarios", users)
//--------------------------------------------------------------------------------------------

//Ejemplo con funciones
const get_expire_date = () => {
    return Date.now() + 30;
}

function build_full_name(name, lastname) {
    return name + full_name;
}

function user_register(){
    //Toma de valores
    let user_name = prompt("Ingrese nombre de usuario")
    let user_lastname = prompt("Ingrese nombre de apellido")
    let user_age = prompt("Ingrese nombre de edad")
    let user_weight = prompt("Ingrese nombre de peso")

    //Armado de nombre compelto
    let user_full_name = build_full_name(user_name, user_lastname);

    //Calculo de dias de vigencia
    let expires = get_expire_date();

    let user = {
                "full_name": user_full_name,
                "age": user_age,
                "weight": user_weight + "Kg",
                'expires': expires
    }

    return user;
}

let users1 = [];

let users_count1 = 4;

while (users_count1 > 0) {
    users1.push(user_register())

    setInterval(() => {
        
    }, 1000);
}

console.log("Usurios", users)