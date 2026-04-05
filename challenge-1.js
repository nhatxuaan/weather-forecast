var todaysWeather={
    temperature :{
        high: 55,
        low: 30
    },
    conditions: "sunny",
    astronomy: {
        sunrise: "7:30 AM",
        sunset: "5:10 PM"
    }
}

//1. Log today's high temperature to the console.
console.log(todaysWeather.temperature.high);
//2. Log today's low temperature to the console.
console.log(todaysWeather.temperature.low);
//3. Log today's conditions to the console.
console.log(todaysWeather.conditions);
//4. Log today's sunrise time to the console.
console.log(todaysWeather.astronomy.sunrise);
//5. Use string template literals to create a more detailed description of today's weather.
console.log(`It's currently ${todaysWeather.conditions} and ${todaysWeather.temperature.low} degrees. The sun rose this morning at ${todaysWeather.astronomy.sunrise} and will set at ${todaysWeather.astronomy.sunset}.`)