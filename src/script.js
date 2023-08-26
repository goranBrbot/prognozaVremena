
// GRAFIČKI PRIKAZ VREMENA PO KODOVIMA

const dayIcon = {
  0: '<img src="svg/clear-day.svg" alt="" height="300"></img>',
  1: '<img src="svg/partly-cloudy-day.svg" alt="" height="300"></img>',
  2: '<img src="svg/overcast-day.svg" alt="" height="300"></img>',
  3: '<img src="svg/cloudy.svg" alt="" height="300"></img>',

  45: '<img src="svg/fog-day.svg" alt="" height="300"></img>',
  48: '<img src="svg/fog.svg" alt="" height="300"></img>',

  51: '<img src="svg/partly-cloudy-day-drizzle.svg" alt="" height="300"></img>',
  53: '<img src="svg/overcast-drizzle.svg" alt="" height="300"></img>',
  55: '<img src="svg/extreme-drizzle.svg" alt="" height="300"></img>',
  56: '<img src="svg/drizzle.svg" alt="" height="300"></img>',
  57: '<img src="svg/extreme-drizzle.svg" alt="" height="300"></img>',

  61: '<img src="svg/partly-cloudy-day-rain.svg" alt="" height="300"></img>',
  63: '<img src="svg/overcast-day-rain.svg" alt="" height="300"></img>',
  65: '<img src="svg/extreme-day-rain.svg" alt="" height="300"></img>',
  66: '<img src="svg/rain.svg" alt="" height="300"></img>',
  67: '<img src="svg/rain.svg" alt="" height="300"></img>',

  71: '<img src="svg/overcast-day-snow.svg" alt="" height="300"></img>',
  73: '<img src="svg/extreme-day-snow.svg" alt="" height="300"></img>',
  75: '<img src="svg/snow.svg" alt="" height="300"></img>',
  77: '<img src="svg/overcast-snow.svg" alt="" height="300"></img>',

  80: '<img src="svg/extreme-rain.svg" alt="" height="300"></img>',
  81: '<img src="svg/extreme-rain.svg" alt="" height="300"></img>',
  82: '<img src="svg/extreme-rain.svg" alt="" height="300"></img>',

  85: '<img src="svg/extreme-snow.svg" alt="" height="300"></img>',
  86: '<img src="svg/extreme-snow.svg" alt="" height="300"></img>',

  95: '<img src="svg/thunderstorms.svg" alt="" height="300"></img>',
  96: '<img src="svg/thunderstorms-overcast.svg" alt="" height="300"></img>',
  99: '<img src="svg/thunderstorms-rain.svg" alt="" height="300"></img>',
};

// DOHVAĆANJE HTML ELEMENATA

const trenutnaPrognoza = document.querySelector("#trenutnaPrognoza");
const grafika = document.querySelector("#grafika");
const dnevnaPrognoza = document.querySelector("#dnevnaPrognoza");


// PROMJENA GRADOVA

function promjenaGrada() {
  const odabir = document.querySelector("#odabir");
  let odabrano = odabir.value;
  
  if (odabrano === "zagreb") return prognozaVremena(zagrebLink);
  if (odabrano === "osijek") return prognozaVremena(osijekLink);
  if (odabrano === "varazdin") return prognozaVremena(varazdinLink);
  if (odabrano === "gospic") return prognozaVremena(gospicLink);
  if (odabrano === "rijeka") return prognozaVremena(rijekaLink);
  if (odabrano === "zadar") return prognozaVremena(zadarLink);
  if (odabrano === "split") return prognozaVremena(splitLink);
  if (odabrano === "dubrovnik") return prognozaVremena(dubrovnikLink);
}

const zagrebLink = "https://api.open-meteo.com/v1/forecast?latitude=45.7406&longitude=16.0683&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=auto&forecast_days=16";
const osijekLink = "https://api.open-meteo.com/v1/forecast?latitude=45.5511&longitude=18.6939&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=auto&forecast_days=16";
const varazdinLink = "https://api.open-meteo.com/v1/forecast?latitude=46.3044&longitude=16.3378&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=auto&forecast_days=16";
const gospicLink = "https://api.open-meteo.com/v1/forecast?latitude=44.5461&longitude=15.3747&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=auto&forecast_days=16";
const rijekaLink = "https://api.open-meteo.com/v1/forecast?latitude=45.3267&longitude=14.4424&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=auto&forecast_days=16";
const zadarLink = "https://api.open-meteo.com/v1/forecast?latitude=44.1083&longitude=15.3467&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=auto&forecast_days=16";
const splitLink = "https://api.open-meteo.com/v1/forecast?latitude=43.5089&longitude=16.4392&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=auto&forecast_days=16";
const dubrovnikLink = "https://api.open-meteo.com/v1/forecast?latitude=42.6412&longitude=18.1091&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=auto&forecast_days=16";


async function prognozaVremena(grad) {
  const link = grad;
  const response = await fetch(link);
  const data = await response.json();

  // TRENUTNA TEMPERATURA

  let timezoneDisplay = new Date(Date.parse(data.current_weather.time)); // The method Date.parse(str) can read a date from a string.
  trenutnaPrognoza.innerHTML = `
  <p>Izmjereno ${timezoneDisplay.toLocaleDateString("hr") + " u " + timezoneDisplay.toLocaleTimeString("hr") + "h"}</p>
  <h2 class='temp'>${data.current_weather.temperature} <small>${data.daily_units.temperature_2m_max}</small></h2>
  <p class='tempSmall'>${data.daily.temperature_2m_min[0]} / ${data.daily.temperature_2m_max[0]}</p>`;

  // GRAFIČKI PRIKAZ TRENUTNOG VREMENA

  const weathercode = data.current_weather.weathercode;
  const trenutnaIkona = trenutniWeathercode();

  function trenutniWeathercode() {
    for (let key in dayIcon) if (key == weathercode) return dayIcon[key];
  }

  grafika.innerHTML = `${trenutnaIkona}`;

  // PROGNOZA VREMENA ZA 16 DANA

  const dnevniDatumi = data.daily.time;
  const vrijednosti = dnevniDatumi.map((value) => "<li>" + value + "</li>");
  const datumi = "<ul>" + `<img src="svg/celsius.svg" height="70"></img>` + vrijednosti.join("") + "</ul>";
  dnevnaPrognoza.innerHTML = `${datumi}`;

  const temperaturaMin = data.daily.temperature_2m_min;
  const vrijednosti2 = temperaturaMin.map((value) => "<li>" + value + `<span> ${data.daily_units.temperature_2m_min}</span>` + "</li>");
  const temp1 = "<ul>" + `<img src="svg/thermometer-colder.svg" height="70"></img>` + vrijednosti2.join("") + "</ul>";
  dnevnaPrognoza.innerHTML += `${temp1}`;

  const temperaturaMax = data.daily.temperature_2m_max;
  const vrijednosti3 = temperaturaMax.map((value) => "<li>" + value + `<span> ${data.daily_units.temperature_2m_max}</span>` + "</li>");
  const temp2 = "<ul>" + `<img src="svg/thermometer-warmer.svg" height="70"></img>` + vrijednosti3.join("") + "</ul>";
  dnevnaPrognoza.innerHTML += `${temp2}`;

  const precipitationProbability = data.daily.precipitation_probability_max;
  const vrijednosti4 = precipitationProbability.map((value) => "<li>" + value + `<span> ${data.daily_units.precipitation_probability_max}</span>` + "</li>");
  const percipProb = "<ul>" + `<img src="svg/umbrella.svg" height="70"></img>` + vrijednosti4.join("") + "</ul>";
  dnevnaPrognoza.innerHTML += `${percipProb}`;

  const precipitationSum = data.daily.precipitation_sum;
  const vrijednosti5 = precipitationSum.map((value) => "<li>" + value + `<span> ${data.daily_units.precipitation_sum}</span>` + "</li>");
  const percipation = "<ul>" + `<img src="svg/raindrop.svg" height="70"></img>` + vrijednosti5.join("") + "</ul>";
  dnevnaPrognoza.innerHTML += `${percipation}`;

  const windSpeed = data.daily.windspeed_10m_max;
  const vrijednosti6 = windSpeed.map((value) => "<li>" + value + `<span> ${data.daily_units.windspeed_10m_max}</span>` + "</li>");
  const wind = "<ul>" + `<img src="svg/wind-beaufort-1.svg" height="70"></img>` + vrijednosti6.join("") + "</ul>";
  dnevnaPrognoza.innerHTML += `${wind}`;

  const windgusts = data.daily.windgusts_10m_max;
  const vrijednosti7 = windgusts.map((value) => "<li>" + value + `<span> ${data.daily_units.windgusts_10m_max}</span>` + "</li>");
  const gusts = "<ul>" + `<img src="svg/windsock.svg" height="70"></img>` + vrijednosti7.join("") + "</ul>";
  dnevnaPrognoza.innerHTML += `${gusts}`;
};

prognozaVremena(zagrebLink);