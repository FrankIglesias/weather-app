const { getLocation } = require('../interactors/ipApi');
const { getCurrentWeather, getForecast } = require('../interactors/weatherMap');

module.exports.getCurrentLocation = (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  getLocation(ip).then(response => res.send(response.data));
}

module.exports.getWeatherByCity = async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let locationResponse = { data: {} };
  if (!req.params.city) {
    locationResponse = await getLocation(ip);
  }
  const weatherResponse = await getCurrentWeather(locationResponse.data.lat, locationResponse.data.lon, req.params.city);
  res.send({
    location: req.params.city || locationResponse.data,
    weather: weatherResponse.data
  });
}


module.exports.getCityForecast = async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const locationResponse = await getLocation(ip);
  const weatherResponse = await getForecast(locationResponse.data.lat, locationResponse.data.lon);
  res.send({
    forecast: weatherResponse.data.daily.slice(0, 5)
  });
}
