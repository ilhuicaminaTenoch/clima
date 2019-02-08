// este es un componete funional, es decir un componenete que no tiene estado;

import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
    <div>
        <WeatherLocation city="Buenos Aires, ar"></WeatherLocation>
        <WeatherLocation city="Mexico, mx"></WeatherLocation>
        <WeatherLocation city="Bogota, col"></WeatherLocation>
    </div>
);

export default LocationList;