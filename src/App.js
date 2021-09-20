import './index.css';
import React, { useState, useEffect } from "react"
import axios from 'axios';

function App() {

  const [Search, setSearch] = useState(null);
  const [weather, setWeather] = useState(null);
  const [City, SetCity] = useState(null);

  useEffect(() => {
    if (Search != null) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units=metric`)
        .then((res) => {
          console.log(res.data)
          const newWeather = res.data;
          SetCity(res)
          setWeather(newWeather);
        }).catch((err) => { console.log(err) })
    }
  }, [Search]);

  return (<div className="app">
    <main>
      <div className="search-box">
        <input type='text' className='search-bar' placeholder="Search..." onChange={(e) => {
          setSearch(e.target.value)
        }} />
      </div>

      <div className='cn' >Karachi</div>
      <div className='dis'>Clear</div>
      <div className='temp'>25<sup className='degree'>o</sup> <span id='dg'>C</span>  </div>

      <div className='data'>
        <div>
          <span className="val">Wind speed:4</span>  <span className='spacew'></span>
          <span className="val">Feel Like : 26<sup >o</sup>C  </span>
        </div>
        <div>
          <span className="val">Temp Min:26<sup>o</sup>C </span> <span className='spacet'></span>
          <span className="val">Temp Max: 26<sup>o</sup>C</span>
        </div>
        <div>
          <span className="val">Air pressure: 1011</span> <span className='space'></span>
          <span className="val">Humidity: 100</span>
        </div>

      </div>


    </main>
  </div>
  );

}

export default App;