import React from 'react';

const WeatherExtraInfo = ({humedad, viento}) => (
    <div>
        <span>{`${humedad} % - `}</span>
        <span>{`${viento} vientos `}</span>
    </div>    
);

export default WeatherExtraInfo;