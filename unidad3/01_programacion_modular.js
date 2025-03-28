// Calcular el área de un rectángulo usando funciones modulares
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

function mostrarResultado(area) {
  console.log("El área es:", area);
}

let area = calcularAreaRectangulo(5, 3);
mostrarResultado(area);