import React from 'react';
import PropTypes from 'prop-types'
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

/*import {
    SUN,
} from '../../../constants/weathers';*/
import './styles.css';

const WeatherData = ({ data: {temperature, weatherState, humedad, viento} }) => (
    <div className = 'weatherDataCont'>
        <WeatherTemperature  
            temperature={temperature}
            weatherState={weatherState}
        />
        <WeatherExtraInfo humedad={humedad} viento={viento}/>
    </div>

);

WeatherData.prototype = {
    data: PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState:PropTypes.string.isRequired,
        humedad: PropTypes.string.isRequired,
    }),
};
export default WeatherData;