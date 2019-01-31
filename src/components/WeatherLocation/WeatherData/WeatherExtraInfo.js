import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
const WeatherExtraInfo = ({humedad, viento}) => (
    <div className='weatherExtraInfo'>
        <span className="extraInfoText">{`Humedad: ${humedad} %`}</span>
        <span className="extraInfoText">{`Vientos: ${viento}`}</span>
    </div>    
);

WeatherExtraInfo.prototype = {
    humedad: PropTypes.number.isRequired,
    viento: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;