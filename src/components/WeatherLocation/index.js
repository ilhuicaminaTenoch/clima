import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes }  from 'prop-types';
import Location from './Location';
import transformWeather from './../../services/transformWeather';
import WeatherData from './WeatherData';
import './styles.css';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

class WeatherLocation extends Component {
    //se crear el constructor de la clase
    constructor(props){
        super(props);
        const { city } = props
        this.state ={
            city,
            data: null,
        };
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('Componente Did  Mount');
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Componente Did Update');
       
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data =>{
            console.log('Resultado del handlerUpdateClick');
            const newWeather = transformWeather(data);
            this.setState({
               data:newWeather,
            });

        });
    };
    render() {
        console.log('render');
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return(
            <div className="weatherLocationContent" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                { data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50} thickness={7}></CircularProgress>}
            </div>
        );
    }
};


WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,

}
export default WeatherLocation;