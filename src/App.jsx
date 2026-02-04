import {useState} from 'react';
import './App.css';
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
    const [tempUnit,setTempUnit]=useState("\u00BAC");
    const [speedUnit,setSpeedUnit]=useState("km/h");
    const [precipitationUnit,setPrecipitationUnit]=useState("mm");
    const [query,setQuery]=useState("");
    const [searchName,setSearchName]=useState("");
    const [country,setCountry]=useState("");
    const [day,setDay]=useState("");
    const [date,setDate]=useState("");
    const [month,setMonth]=useState("");
    const [year,setYear]=useState("");
    const [hourlyTemps,setHourlyTemps]=useState([]);
    const [isSubmenuHidden,setIsSubmenuHidden]=useState(true);
    const [currentTemp,setCurrentTemp]=useState(null);
    const [feelLike,setFeelLike]=useState(null);
    const [humidity,setHumidity]=useState(null);
    const [windSpeed,setWindSpeed]=useState(null);
    const [precipitation,setPrecipitation]=useState(null);

    const handleSelectedDayChange=(event) => {
        event.preventDefault();
        setHourlyTemps(datas.find(d => d.date.toLowerCase()===event.target.value).hourlyTemps);
    };

    function convertMonth(monthNum) {
        let month="";

        switch(monthNum) {
            case 0:
                month="Jan";
                break;
            case 1:
                month="Feb";
                break;
            case 2:
                month="Mar";
                break;
            case 3:
                month="Apr";
                break;
            case 4:
                month="May";
                break;
            case 5:
                month="Jun";
                break;
            case 6:
                month="Jul";
                break;
            case 7:
                month="Aug";
                break;
            case 8:
                month="Sep";
                break;
            case 9:
                month="Oct";
                break;
            case 10:
                month="Nov";
                break;
            case 11:
                month="Dec";
                break;
        }

        return month;
    }

    function convertDay(dayNum) {
        let day="";

        switch(dayNum) {
            case 0:
                day="Sun";
                break;
            case 1:
                day="Mon";
                break;
            case 2:
                day="Tue";
                break;
            case 3:
                day="Wed";
                break;
            case 4:
                day="Thu";
                break;
            case 5:
                day="Fri";
                break;
            case 6:
                day="Sat";
                break;
        }

        return day;
    }
    async function searchWeather() {

        try {
            const longlatRes=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`);
            const longlatJson=await longlatRes.json();
            const longtitude=longlatJson.results[0]["longitude"];
            const latitude=longlatJson.results[0]["latitude"];
            setSearchName(longlatJson.results[0]["name"]);
            setCountry(longlatJson.results[0]["country"]);

            const weatherData=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&current=apparent_temperature,precipitation,wind_speed_10m,wind_direction_10m,temperature,relative_humidity_2m`);
            const weatherJson=await weatherData.json();
            console.log(weatherJson["current"]);
            setCurrentTemp(weatherJson["current"]["temperature"]);
            setFeelLike(weatherJson["current"]["apparent_temperature"]);
            setWindSpeed(weatherJson["current"]["wind_speed_10m"]);
            setPrecipitation(weatherJson["current"]["precipitation"]);
            setHumidity(weatherJson["current"]["relative_humidity_2m"]);
            const dateTime=new Date(weatherJson["current"]["time"]);
            setDay(convertDay(dateTime.getDay()));
            setDate(dateTime.getDate());
            setMonth(convertMonth(dateTime.getMonth()));
            setYear(dateTime.getFullYear());
            return true;
        }

        catch(error) {
            console.log(error);
            return false;
        }
    }

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
                <button className="wide-btn" onClick={searchWeather}>Search</button>
                <div className="container__overall-result">
                    <picture>
                        <source srcSet="/bg-today-small.svg" media="(max-width: 52rem)" />
                        <source srcSet="/bg-today-large.svg" media="(min-width: 52rem)" />
                        <img src="/bg-today-small.svg" alt="today background image"/>
                    </picture>
                    <div className="today-result">
                        <h2>{`${searchName}, ${country}`}</h2>
                        <p>{`${day}, ${month} ${date}, ${year}`}</p>
                        <div>
                            <img src="/icon-sunny.webp"/>
                            <p>{currentTemp!=null? `${currentTemp} ${tempUnit}` : ''}</p>
                        </div>
                    </div>
                </div>
                <div className="container__result-details">
                    <div >
                        <label>Feels Like</label>
                        <p>{feelLike!=null? `${feelLike} ${tempUnit}`:''}</p>
                    </div>
                    <div>
                        <label>Humidity</label>
                        <p>{humidity!=null ? `${humidity} %` : ''}</p>
                    </div>
                    <div>
                        <label>Wind</label>
                        <p>{windSpeed!=null? `${windSpeed} ${speedUnit}`:''}</p>
                    </div>
                    <div>
                        <label>Precipitation</label>
                        <p>{precipitation!=null? `${precipitation} ${precipitationUnit}` : ''}</p>
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
                                        <p>{`${data.maxTemp}\u00BA`}</p>
                                        <p>{`${data.minTemp}\u00BA`}</p>
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
                                    <p>{`${hourlyTemp.temp}\u00BA`}</p>
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
