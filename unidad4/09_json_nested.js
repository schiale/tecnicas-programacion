// EJERCICIO 9: Procesar un objeto JSON anidado
// Objetivo: Acceder a datos internos en estructuras complejas

async function obtenerClima() {
  const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-34.6&longitude=-58.4&current_weather=true");
  const data = await res.json();
  const clima = data.current_weather;
  console.log(`Temperatura: ${clima.temperature}°C, Viento: ${clima.windspeed} km/h`);
}

obtenerClima();
