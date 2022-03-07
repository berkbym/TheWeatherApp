import React from 'react'
import { useEffect, useState } from 'react'
import '../App.scss'


export default function ForecastGroup() {

  const [cityForecastData, setForecastData] = useState([])
  const [city, setCity] = useState("Glasgow")
  var apikey = 'd7d6e1e52e0f4736900125350211105'

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude.toString()
      const long = position.coords.longitude.toString()
      const coords = lat.concat(",",long)
      setCity(coords)
    })

    const fetchData = async () => {
        // With free api the only option is 3 days
        const forecastResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=7`)
        const forecastData = await forecastResponse.json()
        setForecastData(forecastData)
    }
    fetchData()
  }, [apikey,city])

  return (
    <div className='forecastGroup'>
        <p className='title'>This Week's Weather Forecast</p>
        <div className='forecastTable'>
          {cityForecastData?.forecast?.forecastday?.map(
              (day) => (
                <div key={day.date} className='forecastCard'>
                  <p>{day.date}</p>
                  <p>{day.day.condition.text}</p>
                  <div className='iconGroup'>
                    <p>{Math.ceil(day.day.avgtemp_c)}&deg;</p>
                    <img src={day.day.condition.icon} alt=""/>
                  </div>
                </div> 
              )
            )}
        </div>
    </div>
  )
}
