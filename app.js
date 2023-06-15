const  API_KEY = "zneag0dm7MYwxDBW";

// Fonction pour obtenir la météo à partir de l'API
async function getWeather(ville) {
  const url = `https://my.meteoblue.com/packages/basic-1h_basic-day_current?apikey=zneag0dm7MYwxDBW&lat=47.5584&lon=7.57327&asl=279&format=json`;
  const reponse = await fetch(url);
 
  const data = await reponse.json();
  
  return data;

}


const form = document.querySelector("form");
const inputVille = document.querySelector("#ville");
const resultats = document.querySelector("#resultats");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); 
  // Empêche le formulaire de se soumettre à une page différente

  if (inputVille.value === "") {
    alert("Veuillez entrer le nom d'une ville.");
    return;
  }

  // Recherche de la météo pour la ville spécifiée
  const data = await getWeather(inputVille.value);

  // Affichage des résultats
  resultats.innerHTML = `
    <h2>${data_current.name} (${data.data_current.name})</h2>
    <p>Temps actuel: ${data.data_current.weather}</p>
    <p>Température: ${data.data_current.temperature} °C</p>
    <p>Humidité: ${data.data_current.humidity} %</p>
  `;
});
