// Simular un error de red
async function apiInvalida() {
  try {
    const res = await fetch('https://api.invalidurl.com/data');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error capturado correctamente:", error.message);
  }
}
apiInvalida();