/* eslint-disable react-hooks/immutability */
import {useState,useEffect} from 'react';
import './App.css';

function App() {
    //all hourly temp for 7 days
    /*const hourlyTempsMap=new Map();*/

    const [hourlyTempsCollection,setHourlyTempsCollection]=useState([]);
    const [tempUnit,setTempUnit]=useState("\u00BAC");
    const [speedUnit,setSpeedUnit]=useState("km/h");
    const [precipitationUnit,setPrecipitationUnit]=useState("mm");

    const [dailyTemps,setDailyTemps]=useState([]);
    const [selectedDay,setSelectedDay]=useState("");

    //hourly temps in a day
    const [hourlyTemps,setHourlyTemps]=useState([]);

    const [query,setQuery]=useState("");
    const [searchName,setSearchName]=useState("");
    const [country,setCountry]=useState("");
    const [day,setDay]=useState("");
    const [date,setDate]=useState("");
    const [month,setMonth]=useState("");
    const [year,setYear]=useState("");
    const [isSubmenuHidden,setIsSubmenuHidden]=useState(true);
    const [currentIcon,setCurrentIcon]=useState(null);
    const [currentTemp,setCurrentTemp]=useState(null);
    const [feelLike,setFeelLike]=useState(null);
    const [humidity,setHumidity]=useState(null);
    const [windSpeed,setWindSpeed]=useState(null);
    const [precipitation,setPrecipitation]=useState(null);

    const handleSelectedDayChange=(event) => {
        event.preventDefault();
        setSelectedDay(event.target.value);
    };

    useEffect(() => {
        if(!selectedDay)
            return;

        const dayTemps=hourlyTempsCollection.find(h => h["day"]===selectedDay);
        if(dayTemps) {
            setHourlyTemps(dayTemps["temps"]);
        }
    },[selectedDay]);

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

    function convertIcon(weatherCode) {
        let icon="";
        if(weatherCode===0) {
            icon="/icon-sunny.webp";
        }
        else if(weatherCode>=1&&weatherCode<=3) {
            icon="/icon-partly-cloudy.webp";
        }
        else if(weatherCode>=4&&weatherCode<=8) {
            icon="/icon-overcast.webp";
        }
        else if(weatherCode>=40&&weatherCode<=49) {
            icon="/icon-fog.webp";
        }
        else if(weatherCode>=50&&weatherCode<=59) {
            icon="/icon-drizzle.webp";
        }
        else if(weatherCode===71||weatherCode===73||weatherCode===75||weatherCode===77||weatherCode===85||weatherCode===86) {
            icon="/icon-snow.webp";
        }
        else if(weatherCode>=95&&weatherCode<=99) {
            icon="/icon-storm.webp";
        }
        
        return icon;
    }

    function convertDay(dayNum) {
        let day="";

        switch(dayNum) {
            case 0:
                day="Sunday";
                break;
            case 1:
                day="Monday";
                break;
            case 2:
                day="Tuesday";
                break;
            case 3:
                day="Wednesday";
                break;
            case 4:
                day="Thursday";
                break;
            case 5:
                day="Friday";
                break;
            case 6:
                day="Saturday";
                break;
        }

        return day;
    }

    function handleDailyData(dailyJson) {
        let temps=[];
        let count=0;
        for(const time of dailyJson["time"]) {

            let temp={
                day: null,
                minTemp: null,
                maxTemp: null,
                icon: "/icon-rain.webp",
            };

            const date=new Date(time);
            temp.day=convertDay(date.getDay());
            if(dailyJson["temperature_2m_max"][count]) {
                temp.maxTemp=dailyJson["temperature_2m_max"][count];
            }
            if(dailyJson["temperature_2m_min"][count]) {
                temp.minTemp=dailyJson["temperature_2m_min"][count];
            }

            if(dailyJson["weather_code"][count]) {
                temp.icon=convertIcon(dailyJson["weather_code"][count]);
            }
            count++;
            temps.push(temp);
        }

        setDailyTemps(temps);
    }

    function handleHourlyData(hourlyJson) {
        setSelectedDay("");
        let hourlyTempsArr=[];
        let currentDay="";
        let currentTemps=[];
        let count=0;

        for(var time of hourlyJson["time"]) {
            const datetime=new Date(time);
            const day=convertDay(datetime.getDay());
            if(currentDay!==day) {
                if(currentDay!=="") {
                    hourlyTempsArr.push({
                        day: currentDay,
                        temps: [...currentTemps],
                    });

                    currentTemps=[];
                }
                currentDay=day;
            }

            const hourlyTemp={
                temp: hourlyJson["temperature"][count],
                hour: datetime.getHours(),
                icon: convertIcon(hourlyJson["weather_code"][count]),
            }

            currentTemps.push(hourlyTemp);
           /* hourlyTempsMap[currentDay].push(hourlyTemp);*/
            count++;
        }

        if(currentTemps.length > 0) {
            hourlyTempsArr.push({
                day: currentDay,
                temps: [...currentTemps],
            });
        }

        setHourlyTempsCollection(hourlyTempsArr);
        setHourlyTemps(hourlyTempsArr[0]["temps"]);
    }

    async function searchWeather() {

        try {
            const longlatRes=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`);
            const longlatJson=await longlatRes.json();
            /*console.log(longlatJson.results[0]);*/
            const longtitude=longlatJson.results[0]["longitude"];
            const latitude=longlatJson.results[0]["latitude"];
            const timezone=longlatJson.results[0]["timezone"] ?? "GMT";
            setSearchName(longlatJson.results[0]["name"]);
            setCountry(longlatJson.results[0]["country"]);

            const weatherData=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&current=apparent_temperature,precipitation,wind_speed_10m,wind_direction_10m,temperature,relative_humidity_2m,weather_code`);
            const weatherJson=await weatherData.json();
            /* console.log(weatherJson);*/
            setCurrentIcon(convertIcon(weatherJson["current"]["weather_code"]));
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

            const daily=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&timezone=${timezone}&daily=temperature_2m_min,temperature_2m_max,weather_code`);
            const dailyJson=await daily.json();
            handleDailyData(dailyJson["daily"]);

            const hourlyData=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&hourly=temperature,weather_code`);
            const hourlyJson=await hourlyData.json();
            handleHourlyData(hourlyJson["hourly"]);
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
                            <img src={currentIcon} alt="weather icon" />
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
                        dailyTemps.map(data => {
                            return (
                                <li key={data.day}>
                                    <p>{data.day}</p>
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
