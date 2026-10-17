const BASE_URL = "https://api.open-meteo.com/v1/forecast"

async function fetchForecast(city, days, signal){
    const params = new URLSearchParams({
        latitude: city.lat,
        longitude: city.log,
        hourly: "temperature_2m",
        forecast_days: days,
        timezone: 'auto'
    });

    const result = await fetch(`${BASE_URL}?${params}`, {signal});
    if (!result.ok) {
        throw new Error("HTTP ${result.status}")
    }

    const json = await result.json();

    return json.hourly.time.map((t, i)=>({
        date: new Date(t),
        temp: json.hourly.temperature_2m[i]
    }))

}

export {fetchForecast}