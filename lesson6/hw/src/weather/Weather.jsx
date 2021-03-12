import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWeatherData } from './weather.actions';

const Weather = p => {
   const { weatherData } = p;

   useEffect(() => {
      p.getWeatherData();
   }, []);

   return (
      <main className="weather">
         <h1 className="weather__title">Weather data</h1>
         {weatherData && (
            <ul className="cities-list">
               {weatherData.map(city => (
                  <li className="city" key={city.id}>
                     <span className="city__name">{city.name}</span>
                     <span className="city__temperature">{city.temperature}</span>
                  </li>
               ))}
            </ul>
         )}
      </main>
   );
};

const mapState = state => ({
   weatherData: state,
});
const mapDispatch = {
   getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
