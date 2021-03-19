import React from 'react';
import '../index.css';
import { Card } from 'semantic-ui-react';

const WeatherCard = ({ weatherData }) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">Location: {weatherData.name}</Card.Header>
            <p>Temperature: {weatherData.main.temp}&deg;C</p>
            <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
        </Card.Content>
    </Card>
)
export default WeatherCard;