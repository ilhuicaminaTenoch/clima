import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    SUN,
} from './../../constants/weathers';
import './styles.css';

const data ={
    temperature: 4,
    weatherState: SUN,
    humedad: 15,
    viento:'10 m/s',

};

class WeatherLocation extends Component {
    render(){
        return (
            <div className="weatherLocationContent">
            <Location city={"Acapulco Mexico"}></Location>
            <WeatherData data={data}></WeatherData>
    
        </div>
        );
    }
   
};


export default WeatherLocation;