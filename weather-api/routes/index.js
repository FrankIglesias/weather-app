var express = require('express');
var router = express.Router();

const { getCurrentLocation, getWeatherByCity, getCityForecast } = require('../controllers/weather');

router.get('/location', getCurrentLocation);
router.get('/current/:city?', getWeatherByCity);
router.get('/forecast', getCityForecast);


module.exports = router;
