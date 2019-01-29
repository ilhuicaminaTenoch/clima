 import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import {
    CLOUD,
} from '../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className = 'weatherDataCont'>
        <WeatherTemperature  
            temperature={20}
            weatherState={CLOUD}
        />
        <WeatherExtraInfo humedad={80} viento={"10 m/s"}/>
    </div>

);

export default WeatherData;