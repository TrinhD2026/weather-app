import {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import CurrentWeather from './components/CurrentWeather/CurrentWeather.jsx';
import DailyForecast from './components/DailyForecast/DailyForecast.jsx';
import HourlyForecast from './components/HourlyForecast/HourlyForecast.jsx';

function App() {
    const [currentData,setCurrentData]=useState(null);

    const [hourlyTempsCollection,setHourlyTempsCollection]=useState([]);
    const [unitSetting,setUnitSetting]=useState("metric");
    const [tempUnitSetting,setTempUnitSetting]=useState("celsius");
    const [tempUnit,setTempUnit]=useState("\u00BAC");
    const [speedUnit,setSpeedUnit]=useState("kmh");
    const [precipitationUnit,setPrecipitationUnit]=useState("mm");

    const [dailyTemps,setDailyTemps]=useState([]);

    const [query,setQuery]=useState("");
    const [searchName,setSearchName]=useState("");
    const [country,setCountry]=useState("");

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

    function switchUnitSetting() {
        if(unitSetting==="metric") {
            setTempUnit("\u00BAF");
            setTempUnitSetting("fahrenheit");
            setPrecipitationUnit("inch");
            setSpeedUnit("mph");
        }
        else {
            setTempUnit("\u00BAC");
            setTempUnitSetting("celsius");
            setPrecipitationUnit("mm");
            setSpeedUnit("kmh");
        }

        setUnitSetting(unitSetting==="metric"? "imperial":"metric");
    }

    function convertIcon(weatherCode) {
        let icon="";
        if(weatherCode>=1&&weatherCode<=3) {
            icon="/icon-partly-cloudy.webp";
        }
        else if(weatherCode>=4&&weatherCode<=8) {
            icon="/icon-overcast.webp";
        }
        else if(weatherCode===28||(weatherCode>=40&&weatherCode<=49)) {
            icon="/icon-fog.webp";
        }
        else if(weatherCode>=50&&weatherCode<=59) {
            icon="/icon-drizzle.webp";
        }
        else if((weatherCode>=60&&weatherCode<=69)||(weatherCode>=80&&weatherCode<=84)) {
            icon="/icon-rain.webp";
        }
        else if((weatherCode>=70&&weatherCode<=79)||(weatherCode>=85&&weatherCode<=88)) {
            icon="/icon-snow.webp";
        }
        else if(weatherCode>=95&&weatherCode<=99||weatherCode===17||weatherCode===29) {
            icon="/icon-storm.webp";
        }
        else {
            //TODO: weather_code===0 should be sunny? also act as safety net for other codes. Might need a better logic
            icon="/icon-sunny.webp";
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

    function handleCurrentData(currentJson) {
        const dateTime=new Date(currentJson["current"]["time"]);
        setCurrentData({
            currentIcon: convertIcon(currentJson["current"]["weather_code"]),
            currentTemp: currentJson["current"]["temperature"],
            feelLike: currentJson["current"]["apparent_temperature"],
            windSpeed: currentJson["current"]["wind_speed_10m"],
            precipitation: currentJson["current"]["precipitation"],
            humidity: currentJson["current"]["relative_humidity_2m"],
            day: convertDay(dateTime.getDay()),
            date: dateTime.getDate(),
            month: convertMonth(dateTime.getMonth()),
            year: dateTime.getFullYear(),
        });
    }

    function handleDailyData(dailyJson) {
        let temps=[];
        let count=0;
        //console.log(dailyJson);
        for(const time of dailyJson["time"]) {

            let temp={
                day: null,
                minTemp: null,
                maxTemp: null,
                icon: "",
            };

            const date=new Date(time);
            temp.day=convertDay(date.getDay());
            temp.maxTemp=dailyJson["temperature_2m_max"][count];
            temp.minTemp=dailyJson["temperature_2m_min"][count];
            temp.icon=convertIcon(dailyJson["weather_code"][count]);
            count++;
            temps.push(temp);
        }

        setDailyTemps(temps);
    }

    function handleHourlyData(hourlyJson) {
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
                weatherCode: hourlyJson["weather_code"][count],
                icon: convertIcon(hourlyJson["weather_code"][count]),
            }

            currentTemps.push(hourlyTemp);
            /* hourlyTempsMap[currentDay].push(hourlyTemp);*/
            count++;
        }

        if(currentTemps.length>0) {
            hourlyTempsArr.push({
                day: currentDay,
                temps: [...currentTemps],
            });
        }

        setHourlyTempsCollection(hourlyTempsArr);
      /*  setHourlyTemps(hourlyTempsArr[0]["temps"]);*/
    }

    async function searchWeather() {

        try {
            const longlatRes=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`);
            const longlatJson=await longlatRes.json();
            /*console.log(longlatJson.results[0]);*/
            const longtitude=longlatJson.results[0]["longitude"];
            const latitude=longlatJson.results[0]["latitude"];
            const timezone=longlatJson.results[0]["timezone"]??"GMT";
            setSearchName(longlatJson.results[0]["name"]);
            setCountry(longlatJson.results[0]["country"]);
            const apiString=`https://api.open-meteo.com/v1/forecast`;
            const latitudeString=`latitude=${latitude}`;
            const longtitudeString=`longitude=${longtitude}`;
            const windSpeedUnitStr=`wind_speed_unit=${speedUnit}`;
            const tempUnitStr=`temperature_unit=${tempUnitSetting}`;
            const precipitationUnitStr=`precipitation_unit=${precipitationUnit}`;
            const fetchCurrentTemp=`current=apparent_temperature,precipitation,wind_speed_10m,wind_direction_10m,temperature,relative_humidity_2m,weather_code`;
            const fetchDailyTemp=`daily=temperature_2m_min,temperature_2m_max,weather_code`;
            const fetchHourlyTemp=`hourly=temperature,weather_code`;
            const commonFetch=`${apiString}?${latitudeString}&${longtitudeString}&${windSpeedUnitStr}&${tempUnitStr}&${precipitationUnitStr}`;

            const weatherData=await fetch(`${commonFetch}&${fetchCurrentTemp}`);
            const weatherJson=await weatherData.json();
            handleCurrentData(weatherJson);

            const daily=await fetch(`${commonFetch}&timezone=${timezone}&${fetchDailyTemp}`);
            const dailyJson=await daily.json();
            handleDailyData(dailyJson["daily"]);

            const hourlyData=await fetch(`${commonFetch}&${fetchHourlyTemp}`);
            const hourlyJson=await hourlyData.json();
            handleHourlyData(hourlyJson["hourly"]);
        }

        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        searchWeather();
    },[unitSetting]);

    return (
        <>
            <Header unitSetting={unitSetting}
                switchUnitSetting={switchUnitSetting} />

            <h1>How's the sky looking today?</h1>
            <div className="container__search-input">
                <img src="/icon-search.svg" alt="search icon" />
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
            <CurrentWeather
                currentData={currentData}
                searchName={searchName}
                country={country}
                tempUnit={tempUnit}
                speedUnit={speedUnit}
                precipitationUnit={precipitationUnit} />
            <DailyForecast dailyTemps={dailyTemps}
                tempUnit={tempUnit} />
            <HourlyForecast hourlyTempsCollection={hourlyTempsCollection}
                tempUnit={tempUnit} />
        </>
    )
}

export default App
