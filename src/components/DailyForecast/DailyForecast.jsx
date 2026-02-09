import React from 'react';
import './DailyForecast.css';

function DailyForecast({dailyTemps,tempUnit}) {
    return (
        <div>
            <h2>Daily forecast</h2>
            <ul className="container__daily-forecast">
                {
                    dailyTemps.map(data => {
                        return (
                            <li key={data.day}>
                                <p>{data.day}</p>
                                <img src={data.icon} alt="weather icon" />
                                <div>
                                    <p>{`${data.maxTemp}${tempUnit}`}</p>
                                    <p>{`${data.minTemp}${tempUnit}`}</p>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>

    )
}

export default DailyForecast;