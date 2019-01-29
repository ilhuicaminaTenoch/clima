import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
const WeatherExtraInfo = ({humedad, viento}) => (
    <div className='weatherExtraInfo'>
        <span>{`${humedad} % - `}</span>
        <span>{`${viento} vientos `}</span>
    </div>    
);

WeatherExtraInfo.prototype = {
    humedad: PropTypes.number.isRequired,
    viento: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;