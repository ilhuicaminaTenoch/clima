import React, { Component } from "react";
import PropTypes  from 'prop-types';
import ForecasItem from './ForecastItem';
import './styles.css';


const days =[
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];

const data = {
    temperature: 10,
    weatherState: 'normal',
    humedad: 10,
    viento: 'normal'
}
class ForecastExtended extends Component{
    renderForecastItem(){
        return days.map(day => (<ForecasItem weekDay={day} hour={10} data={data}></ForecasItem>));
    }
    render(){
        const { city } = this.props;
        return(
            <div>
                <h2 className="forecast-title">Pronostico extendido para: {city}</h2>
                {this.renderForecastItem()}
            </div>
        );
    }
}  

ForecastExtended.propTypes ={
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;