import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature/>
        <WeatherExtraInfo humedad={80} viento={"10 m/s"}/>
    </div>

);

export default WeatherData;