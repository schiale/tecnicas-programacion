//Programación modular
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
  
function mostrarResultado(area) {
    console.log("El área del triángulo es:", area);
}
  
let resultado = calcularAreaTriangulo(5, 3);
mostrarResultado(resultado);
  