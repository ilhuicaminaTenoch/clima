 import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import {
    CLOUD,
} from './../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature  
            temperature={20}
            weatherState={CLOUD}
        />
        <WeatherExtraInfo humedad={80} viento={"10 m/s"}/>
    </div>

);

export default WeatherData;