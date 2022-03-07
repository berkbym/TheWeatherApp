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
            <div className='weatherDetailGroup'>
                <p id='condition'>{cityData?.current?.condition?.text}</p>
                <div className='iconGroup'>
                    <img src={cityData?.current?.condition?.icon} alt=""/>
                    <p>{cityData?.current?.temp_c}&deg;</p>
                </div>
            </div>
        </section>
        <section className='weatherTableGroup'>
            <p>table</p>
        </section>
    </div>
  )
}
