import { useState } from 'react'
import './App.css'
const datas=[
    {
        date: "Monday",
        shortDate: "Mon",
        icon: "/icon-fog.webp",
        minTemp: 10,
        maxTemp: 15,
        hourlyTemps: [
            {
                hour: "0 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "1 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "2 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "3 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "4 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "5 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "6 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "7 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "8 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "9 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "10 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "11 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "12 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "13 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "14 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "15 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "16 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "17 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "18 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "19 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "20 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "21 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "22 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "23 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
        ]
    },
    {
        date: "Tuesday",
        shortDate: "Tue",
        icon: "/icon-storm.webp",
        minTemp: 5,
        maxTemp: 10,
        hourlyTemps: [
            {
                hour: "0 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "1 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "2 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "3 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "4 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "5 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "6 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "7 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "8 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "9 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "10 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "11 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "12 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "13 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "14 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "15 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "16 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "17 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "18 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "19 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "20 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "21 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "22 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "23 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
        ]
    },
    {
        date: "Wednesday",
        shortDate: "Wed",
        icon: "/icon-sunny.webp",
        minTemp: 10,
        maxTemp: 15,
        hourlyTemps: [
            {
                hour: "0 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "1 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "2 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "3 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "4 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "5 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "6 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "7 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "8 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "9 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "10 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "11 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "12 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "13 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "14 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "15 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "16 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "17 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "18 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "19 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "20 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "21 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "22 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "23 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
        ]
    },
    {
        date: "Thursday",
        shortDate: "Thu",
        icon: "/icon-rain.webp",
        minTemp: 8,
        maxTemp: 10,
        hourlyTemps: [
            {
                hour: "0 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "1 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "2 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "3 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "4 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "5 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "6 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "7 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "8 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "9 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "10 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "11 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "12 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "13 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "14 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "15 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "16 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "17 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "18 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "19 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "20 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "21 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "22 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "23 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
        ]
    },
    {
        date: "Friday",
        shortDate: "Fri",
        icon: "/icon-snow.webp",
        minTemp: -5,
        maxTemp: 0,
        hourlyTemps: [
            {
                hour: "0 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "1 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "2 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "3 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "4 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "5 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "6 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "7 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "8 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "9 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "10 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "11 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "12 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "13 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "14 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "15 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "16 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "17 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "18 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "19 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "20 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "21 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "22 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "23 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
        ]
    },
    {
        date: "Saturday",
        shortDate: "Sat",
        icon: "/icon-fog.webp",
        minTemp: 0,
        maxTemp: 5,
        hourlyTemps: [
            {
                hour: "0 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "1 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "2 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "3 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "4 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "5 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "6 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "7 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "8 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "9 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "10 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "11 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "12 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "13 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "14 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "15 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "16 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "17 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "18 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "19 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "20 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "21 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "22 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "23 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
        ]
    },
    {
        date: "Sunday",
        shortDate: "Sun",
        icon: "/icon-snow.webp",
        minTemp: -10,
        maxTemp: -5,
        hourlyTemps: [
            {
                hour: "0 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "1 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "2 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "3 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "4 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "5 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "6 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "7 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "8 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "9 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "10 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "11 am",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "12 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "13 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "14 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "15 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "16 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "17 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "18 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "19 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "20 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "21 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "22 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
            {
                hour: "23 pm",
                temp: 10,
                icon: "/icon-fog.webp",
            },
        ]
    },
];
function App() {

    const [query,setQuery]=useState("");
    const [hourlyTemps,setHourlyTemps]=useState([]);
    const [isSubmenuHidden,setIsSubmenuHidden]=useState(true);
    const [feelLike,setFeelLike]=useState("");
    const [humidity,setHumidity]=useState("");
    const [wind,setWind]=useState("");
    const [precipitation,setPrecipitation]=useState("");

    const handleSelectedDayChange=(event) => {
        event.preventDefault();
        setHourlyTemps(datas.find(d => d.date.toLowerCase()===event.target.value).hourlyTemps);
    };

    return (
        <>
            <div className="container__header">
                <img src="/logo.svg" alt="weather logo" />
                <button className="dropdown-btn" onClick={() => setIsSubmenuHidden(!isSubmenuHidden)}>
                    <img src="/icon-units.svg" alt="units icon" />
                    <p>Units</p>
                    <img src="/icon-dropdown.svg" alt="dropdown icon" />
                </button>
                <ul className="sub-menu" aria-label="Apps" hidden={isSubmenuHidden}>
                    <li><a href="#">Calendar</a></li>
                    <li><a href="#">Chat</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
            <div>
                <h1>How's the sky looking today?</h1>
                <div className="container__search-input">
                    <img src="/icon-search.svg" alt="search icon"/>
                    <input
                        id="search"
                        type="search"
                        placeholder="Search for a place..."
                        aria-describedby="search-description"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <button className="wide-btn">Search</button>
                <div className="container__overall-result">
                    <picture>
                        <source srcset="/bg-today-small.svg" media="(max-width: 52rem)" />
                        <source srcset="/bg-today-large.svg" media="(min-width: 52rem)" />
                        <img src="/bg-today-small.svg" alt="today background image"/>
                    </picture>
                    <div className="today-result">
                        <h2>City, Country</h2>
                        <p>Day, Month, Year</p>
                        <div>
                            <img src="/icon-sunny.webp"/>
                            <p>20</p>
                        </div>
                    </div>
                </div>
                <div className="container__result-details">
                    <div >
                        <label>Feels Like</label>
                        <p>{feelLike}</p>
                    </div>
                    <div>
                        <label>Humidity</label>
                        <p>{humidity}</p>
                    </div>
                    <div>
                        <label>Wind</label>
                        <p>{wind}</p>
                    </div>
                    <div>
                        <label>Precipitation</label>
                        <p>{precipitation}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Daily forecast</h2>
                <ul className="container__daily-forecast">
                    {
                        datas.map(data => {
                            return (
                                <li key={data.date}>
                                    <p>{data.shortDate}</p>
                                    <img src={data.icon} alt="weather icon" />
                                    <div>
                                        <p>{data.maxTemp}</p>
                                        <p>{data.minTemp}</p>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="container__hourly-forecast">
                <div className="container__hourly-forecast-header">
                    <h2>Hourly forecast</h2>
                    {/*<button className="dropdown-btn" onClick={() => setIsSubmenuHidden(!isSubmenuHidden)}>*/}
                    {/*    <p>days</p>*/}
                    {/*    <img src="/icon-dropdown.svg" alt="dropdown icon" />*/}
                    {/*</button>*/}

                    <select className="select-day" onChange={handleSelectedDayChange}>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                    </select>
                </div>

                <ul>
                    {
                        hourlyTemps.map(hourlyTemp => {
                            return (
                                <li key={hourlyTemp.hour}>
                                    <img src={hourlyTemp.icon} alt="weather icon" />
                                    <p>{hourlyTemp.hour}</p>
                                    <p>{hourlyTemp.temp}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default App
