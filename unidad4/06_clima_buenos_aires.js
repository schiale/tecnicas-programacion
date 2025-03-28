// Obtener clima actual en Buenos Aires (lat -34.6, lon -58.4)
async function climaBuenosAires() {
  try {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6&longitude=-58.4&current_weather=true');
    const data = await res.json();
    console.log("Temperatura actual:", data.current_weather.temperature, "°C");
  } catch (error) {
    console.error("Error al obtener clima:", error);
  }
}
climaBuenosAires();