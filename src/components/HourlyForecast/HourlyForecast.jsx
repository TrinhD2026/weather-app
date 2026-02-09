import React from 'react';
import {useState, useMemo} from 'react';

import './HourlyForecast.css';

function HourlyForecast({hourlyTempsCollection,tempUnit}) {
    const [selectedDay,setSelectedDay]=useState("Monday");

    const hourlyTemps=useMemo(() => {
        console.log("Filtering items...");
        if(hourlyTempsCollection.length <=0) {
            return [];
        }

        const dayTemps=hourlyTempsCollection.find(h => h["day"]===selectedDay);
        if(!dayTemps) {
            return [];
        }

        return [...dayTemps["temps"]];
    },[selectedDay,hourlyTempsCollection]);

    const handleSelectedDayChange=(event) => {
        event.preventDefault();
        setSelectedDay(event.target.value);
    };

    return (
        <div className="container__hourly-forecast">
            <div className="container__hourly-forecast-header">
                <h2>Hourly forecast</h2>
                {hourlyTempsCollection.length>0&&(
                    <select className="select-day" value={selectedDay} onChange={handleSelectedDayChange}>
                        {
                            hourlyTempsCollection.map(hourly => {
                                return (
                                    <option key={hourly.day} value={hourly.day}>{hourly.day}</option>
                                );
                            })
                        }
                    </select>
                )}

            </div>

            <ul>
                {
                    hourlyTemps && hourlyTemps.map(hourlyTemp => {
                        return (
                            <li key={hourlyTemp.hour}>
                                <img src={hourlyTemp.icon} alt="weather icon" />
                                <p>{hourlyTemp.hour}</p>
                                <p>{`${hourlyTemp.temp}${tempUnit}`}</p>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default HourlyForecast;