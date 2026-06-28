const readline = require('readline/promises');

async function checkWeather() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    
    console.log("--- Real-time Weather Fetcher ---");
    let city = await rl.question("Enter city name (e.g., London, Mumbai): ");
    rl.close();

    if (!city.trim()) {
        console.log("Error: City name cannot be empty.");
        return;
    }

    console.log(`Fetching weather data for ${city}...`);
    
    try {
        // Using open-meteo (a free API that doesn't require API keys)
        // First, we get coordinates of the city via geocoding
        const geoUrl = `https://open-meteo.com{encodeURIComponent(city)}&count=1`;
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            throw new Error("City not found. Please check the spelling.");
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        
        const weatherUrl = `https://open-meteo.com{latitude}&longitude=${longitude}&current_weather=true`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        const temp = weatherData.current_weather.temperature;
        const windspeed = weatherData.current_weather.windspeed;

        console.log(`\n Location: ${name}, ${country}`);
        console.log(` Temperature: ${temp}°C`);
        console.log(` Wind Speed: ${windspeed} km/h`);

    } catch (error) {
        console.log(`\n Failed to get weather: ${error.message}`);
    }
}

checkWeather();


