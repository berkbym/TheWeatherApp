import React from 'react'
import { useEffect, useState } from 'react'
import '../App.scss'

export default function HeroContent() {

const [cityData,setCityData] = useState([])
const [cityForecastData, setForecastData] = useState([])
const [coords, setCoords] = useState("")
const [city, setCity] = useState("Glasgow")
const [toggle, setToggle] = useState(true)
var apikey = 'd7d6e1e52e0f4736900125350211105'
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude.toString()
      const long = position.coords.longitude.toString()
      const coords = lat.concat(",",long)
      setCoords(coords)
      setCity(coords)
    })

    const fetchData = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
        const data = await response.json()
        setCityData(data)

        // With free api the only option is 3 days
        const forecastResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=7`)
        const forecastData = await forecastResponse.json()
        setForecastData(forecastData)
    }
    fetchData()
  }, [apikey,city])

  return (
    <div className='heroContent'>
        <section className='weatherTodayGroup'>
            <p className='date'>Today {today.toDateString()}</p>
            <p className='location'>{cityData?.location?.name},{cityData?.location?.country}</p>
            <p id='condition'>{cityData?.current?.condition?.text}</p>
            <div className='weatherDetailGroup'>
                <div className='iconGroup'>
                <p>{cityData?.current?.temp_c}&deg;</p>
                    <img src={cityData?.current?.condition?.icon} alt=""/>
                    
                </div>
                <table className='table'>
                <tr>
                    <td>Feels Like</td>
                    <td>{Math.ceil(cityData?.current?.feelslike_c)}&deg;</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>{cityData?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind</td>
                    <td>{cityData?.current?.wind_dir} {Math.ceil(cityData?.current?.wind_kph)} km/h</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>{cityData?.current?.pressure_mb} mb</td>
                </tr>
            </table>
            </div>
        </section>
    </div>
  )
}
