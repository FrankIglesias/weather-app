import React, { useState, useEffect } from 'react';

import * as WeatherService from '~services/Weather';
import Card from '~components/Card';
import { Forecast } from '~components/Card/types';

import styles from './styles.module.scss';

const cities = ['Buenos Aires', 'London', 'New York', 'Chicago', 'Paris'];
function Home() {
  const [forecast, setForecast] = useState([]);
  const [selectedCity, setCity] = useState('');
  useEffect(() => {
    (async () => {
      const response = await WeatherService.getForecast(selectedCity);
      if (response.ok) {
        setForecast(response.data.forecast);
      }
    })();
  }, [selectedCity]);
  const setActiveCity = (value: string) => () => setCity(value);
  return (
    <div className="column">
      {selectedCity && <h1>{selectedCity}</h1>}
      <div className="row">
        {cities.map(city => (
          <button type="button" className={styles.button} key={city} onClick={setActiveCity(city)}>
            {city}
          </button>
        ))}
      </div>
      <div className="row center">
        {forecast.map((weather: Forecast) => (
          <Card key={weather.dt} {...weather} />
        ))}
      </div>
    </div>
  );
}

export default Home;
