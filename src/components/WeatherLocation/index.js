import React, {Component} from 'react';
import Location from './Location';
import transformWeather from './../../services/transformWeather';
import WeatherData from './WeatherData';
import {
    SUN,

} from './../../constants/weathers';
import './styles.css';

const location = "Mexico,mx";
const api_key = "d6fac5cb88e951bb6b625fabd86b4b38";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data ={
    temperature: 4,
    weatherState: SUN,
    humedad: 15,
    viento:'10 m/s',
};

class WeatherLocation extends Component {
    //se crear el constructor de la clase
    constructor(){
        super();
        this.state ={
            city:'Buenos Aires',
            data: data,
        };
    }
    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data =>{
            const newWeather = transformWeather(data);
            this.setState({
               data:newWeather,
            });

        });
    };
    render() {
        const {city, data} = this.state;
        return(
            <div className="weatherLocationContent">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
};


export default WeatherLocation;