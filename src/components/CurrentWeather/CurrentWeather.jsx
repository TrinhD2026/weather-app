import React from 'react';
import './CurrentWeather.css';

function CurrentWeather({searchName,country,
    tempUnit,speedUnit,precipitationUnit,
    currentData}) {

    return (
        <div>
            <div className="container__overall-result">
                <picture>
                    <source srcSet="/bg-today-small.svg" media="(max-width: 52rem)" />
                    <source srcSet="/bg-today-large.svg" media="(min-width: 52rem)" />
                    <img src="/bg-today-small.svg" alt="today background image" />
                </picture>
                {
                    currentData&&
                    (
                        <div className="today-result">
                            <h2>{`${searchName}, ${country}`}</h2>
                            <p>{`${currentData.day}, ${currentData.month} ${currentData.date}, ${currentData.year}`}</p>
                            <div>
                                <img src={currentData.currentIcon} alt="weather icon" />
                                <p>{currentData.currentTemp!=null? `${currentData.currentTemp} ${tempUnit}`:''}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                currentData&&
                (
                    <div className="container__result-details">
                        <div >
                            <label>Feels Like</label>
                            <p>{currentData.feelLike!=null? `${currentData.feelLike} ${tempUnit}`:''}</p>
                        </div>
                        <div>
                            <label>Humidity</label>
                            <p>{currentData.humidity!=null? `${currentData.humidity} %`:''}</p>
                        </div>
                        <div>
                            <label>Wind</label>
                            <p>{currentData.windSpeed!=null? `${currentData.windSpeed} ${speedUnit}`:''}</p>
                        </div>
                        <div>
                            <label>Precipitation</label>
                            <p>{currentData.precipitation!=null? `${currentData.precipitation} ${precipitationUnit}`:''}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CurrentWeather;