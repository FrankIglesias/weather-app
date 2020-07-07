var apisauce = require('apisauce');

const api = apisauce.create({});

module.exports.getCurrentWeather = (lat, lon, city) => api.get('http://api.openweathermap.org/data/2.5/weather', { appid: process.env.WEATHER_API_KEY, lat, lon, q: city });

module.exports.getForecast = (lat, lon) => api.get('http://api.openweathermap.org/data/2.5/onecall', { appid: process.env.WEATHER_API_KEY, lat, lon, exclude: 'current,minutely,hourly' })

