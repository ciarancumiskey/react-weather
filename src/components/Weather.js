import React from 'react';
import '../styles.css';
import { Card } from 'semantic-ui-react';
import * as moment from 'moment';

const WeatherCard = ({ weatherData }) => (
    <div className="main">
        <p className="header">{weatherData.name}</p>
        <div className="flex">
            <p className="day">Day: {moment().format('dddd')}</p>
            <p className="day">{moment().format('LL')}</p>
        </div>
        <div className="flex">
            <p className="temp">Temp: {weatherData.main.temp} &deg;C</p>
            <p className="temp">Humidity: {weatherData.main.humidity}%</p>
        </div>
    </div>
)
export default WeatherCard;