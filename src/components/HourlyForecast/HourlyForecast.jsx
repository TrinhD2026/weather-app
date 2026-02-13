import React from 'react';
import {useState, useMemo} from 'react';

import './HourlyForecast.css';

function HourlyForecast({hourlyTempsCollection,tempUnit}) {
    const [selectedDay,setSelectedDay]=useState("");
    const [isSubmenuOpen,setIsSubmenuOpen]=useState(false);

    const hourlyTemps=useMemo(() => {
        console.log("Filtering items...");
        if(hourlyTempsCollection.length <=0) {
            return [];
        }

        if(selectedDay==="") {
            setSelectedDay(hourlyTempsCollection[0].day);
        }

        const dayTemps=hourlyTempsCollection.find(h => h["day"]===selectedDay);
        if(!dayTemps) {
            return [];
        }

        return [...dayTemps["temps"]];
    },[selectedDay,hourlyTempsCollection]);

    return (
        <div className="container__hourly-forecast">
            <div className="container__hourly-forecast-header">
                <h2>Hourly forecast</h2>
                {hourlyTempsCollection.length>0&&(
                    <div className="container__day-selection">
                        <button className="icon-btn dropdown-btn" onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}>
                            {selectedDay}
                            <img src="/icon-dropdown.svg" alt="dropdown icon" />
                        </button>
                        {isSubmenuOpen&&(
                            <ul>
                                {
                                    hourlyTempsCollection.map(hourly => {
                                        return (
                                            <li key={hourly.day} >
                                                <button className="transparent-btn" onClick={() => {
                                                    setSelectedDay(hourly.day);
                                                    setIsSubmenuOpen(false);
                                                }}>{hourly.day}</button>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        )}
                    </div>
                )}
            </div>

            <ul className="hourly-temps">
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