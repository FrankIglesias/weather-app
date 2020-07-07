import React from 'react';

import { kelvinToCelcius } from '~utils/temperature';

import styles from './styles.module.scss';
import { Forecast } from './types';

function Card(forecast: Forecast) {
  return (
    <div
      className={`m-top-3 m-right-3 m-left-3 m-bottom-3 column center middle ${styles.card} ${styles.neomorphic}`}
    >
      <span>{forecast.weather[0].main}</span>
      <span>Average: {kelvinToCelcius(forecast.temp.day)}º</span>
      <div className="row">
        <span>{kelvinToCelcius(forecast.temp.min)}º</span>
        <span className="m-left-1 m-right-1">-</span>
        <span>{kelvinToCelcius(forecast.temp.max)}º</span>
      </div>
    </div>
  );
}

export default Card;
