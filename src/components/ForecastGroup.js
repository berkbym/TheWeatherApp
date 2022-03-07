import React from 'react'
import { useEffect, useState } from 'react'
import '../App.scss'

export default function ForecastGroup() {

const [cityData,setCityData] = useState([])
const [cityForecastData, setForecastData] = useState([])
const [coords, setCoords] = useState("")
const [city, setCity] = useState("Glasgow")
const [toggle, setToggle] = useState(true)
var apikey = 'd7d6e1e52e0f4736900125350211105'

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
    <div className='forecastGroup'>
        Forecast Group
    </div>
  )
}
