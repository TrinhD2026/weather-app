import { useState } from 'react'
import './App.css'

function App() {

    const [query,setQuery]=useState("");
    const [feelLike,setFeelLike]=useState("");
    const [humidity,setHumidity]=useState("");
    const [wind,setWind]=useState("");
    const [precipitation,setPrecipitation]=useState("");
    return (
        <>
            <div className="container__header">
                <img src="/logo.svg" alt="weather logo" />
                <button>
                    <div>
                        <p>Unit</p>
                    </div>
                </button>
                <ul className="sub-menu" aria-label="Apps">
                    <li><a href="#">Calendar</a></li>
                    <li><a href="#">Chat</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </div>
            <div>
                <h1>How's the sky looking today?</h1>
                <input
                    id="search"
                    type="search"
                    placeholder="Search..."
                    aria-describedby="search-description"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="wide-btn">Search</button>
                <div className="container__result">
                    <div className="container__result-overview">
                    </div>
                    <div className="container__result-extra">
                        <label>Feels Like</label>
                        <p>{feelLike}</p>
                    </div>
                    <div className="container__result-extra">
                        <label>Humidity</label>
                        <p>{humidity}</p>
                    </div>
                    <div className="container__result-extra">
                        <label>Wind</label>
                        <p>{wind}</p>
                    </div>
                    <div className="container__result-extra">
                        <label>Precipitation</label>
                        <p>{precipitation}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Daily forecast</h2>

            </div>
        </>
    )
}

export default App
