import React from 'react';
import './CurrentWeather.css';

function CurrentWeather({locationName,
    tempUnit,speedUnit,precipitationUnit,
    currentWeather}) {

    return (
        <div className="container__current-weather">
            <div className="container__overall-result">
                <picture>
                    <source srcSet="/bg-today-small.svg" media="(max-width: 60rem)" />
                    <source srcSet="/bg-today-large.svg" media="(min-width: 60rem)" />
                    <img src="/bg-today-small.svg" alt="today background image" />
                </picture>
                {
                    currentWeather&&
                    (
                        <div className="today-result">
                            <div className="today-result__date-location">
                                <h2>{locationName}</h2>
                                <p>{`${currentWeather.day}, ${currentWeather.month} ${currentWeather.date}, ${currentWeather.year}`}</p>
                            </div>
                            <div className="today-result__temperature">
                                <img src={currentWeather.currentIcon} alt="weather icon" />
                                <p>{currentWeather.currentTemp!=null? `${currentWeather.currentTemp} ${tempUnit}`:''}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                currentWeather&&
                (
                    <div className="container__result-details">
                        <div>
                            <label>Feels Like</label>
                            <p>{currentWeather.feelLike!=null? `${currentWeather.feelLike} ${tempUnit}`:''}</p>
                        </div>
                        <div>
                            <label>Humidity</label>
                            <p>{currentWeather.humidity!=null? `${currentWeather.humidity} %`:''}</p>
                        </div>
                        <div>
                            <label>Wind</label>
                            <p>{currentWeather.windSpeed!=null? `${currentWeather.windSpeed} ${speedUnit}`:''}</p>
                        </div>
                        <div>
                            <label>Precipitation</label>
                            <p>{currentWeather.precipitation!=null? `${currentWeather.precipitation} ${precipitationUnit}`:''}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CurrentWeather;