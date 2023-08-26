// ZADATAK

Vas je zadatak napravit stranicu za vremensku prognozu koja ce imat dropdown s nekoliko gradova, minimum 3 (npr. Zagreb, Split i grad po izboru).
Na vama je hocete li prikazat samo brojcano temperaturu po satima ili uz pomoc nekakvih grafika (sunce, kisa i sl.).
Mozete slobodno prosirit ideju pa ubacit prognozu po satima za ostatak dana, sto god zelite, ali minimum je trenutacno vrijeme za 3 grada koje dobijem iz dropdowna.

Na stranici koju sam poslao unesete ime grada u trazilicu i oznacite sto vam sve treba, npr. brzina vjetra, temperatura, padaline... odmah ispod vidjet cete generiran link za dohvatit te podatke. Sljedece vam je samo uz pomoc js-a procitat te podatke i napravit nesto u DOM-u na temelju njih.
Rok za zadatak, nemate, iako bilo bi dobro da ga zavrsite do pocetka modula React-a. Uzivajte ..

// LINK NA GOTOV PROJEKT

https://prognozavremena.netlify.app/

// API

https://open-meteo.com/en/docs

// KORIŠTENI PODACI

latitude 45.74
longitude 16.06
generationtime_ms 1.9500255584716797
utc_offset_seconds 7200
timezone "Europe/Zagreb"
timezone_abbreviation "CEST"
elevation 105

current_weather
temperature 31.3
windspeed 4.9
winddirection 253
weathercode 0
is_day 1
time "2023-08-23T12:00"

daily_units
time "iso8601"
weathercode "wmo code"
temperature_2m_max "°C"
temperature_2m_min "°C"
precipitation_probability_max "%"
windspeed_10m_max "km/h"
windgusts_10m_max "km/h"

// WEATHER KODOVI KOJE KORISTI API

WMO Weather interpretation codes (WW)
Code Description
0 Clear sky
1, 2, 3 Mainly clear, partly cloudy, and overcast
45, 48 Fog and depositing rime fog
51, 53, 55 Drizzle: Light, moderate, and dense intensity
56, 57 Freezing Drizzle: Light and dense intensity
61, 63, 65 Rain: Slight, moderate and heavy intensity
66, 67 Freezing Rain: Light and heavy intensity
71, 73, 75 Snow fall: Slight, moderate, and heavy intensity
77 Snow grains
80, 81, 82 Rain showers: Slight, moderate, and violent
85, 86 Snow showers slight and heavy
95 _ Thunderstorm: Slight or moderate
96, 99 _ Thunderstorm with slight and heavy hail

// KORIŠTENE IKONE ZA GRAFIČKI PRIKAZ

"Meteocons" Free to use animated SVG weather icons.
Handcrafted by Bas Milius.

👀 Preview
https://basmilius.github.io/weather-icons/index-fill.html
