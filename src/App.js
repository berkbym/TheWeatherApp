import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ChangeCity, FetchData } from './redux/actions'
import './App.scss';
import ForecastGroup from './components/ForecastGroup';
import HeroContent from './components/HeroContent';
import Navbar from './components/Navbar';

function App() {

  const [cityData,setCityData] = useState([])
  const [cityForecastData, setForecastData] = useState([])
  const [city, setCity] = useState("Glasgow")
  const [coords, setCoords] = useState("")
  var apikey = 'd7d6e1e52e0f4736900125350211105'
  const currentCity = useSelector(state => state.currentCity)
  const cityDispatch = useDispatch()
  const fetchDispatch = useDispatch()

  useEffect(() => {
      navigator.geolocation?.getCurrentPosition(function(position) {
        const lat = position.coords.latitude.toString()
        const long = position.coords.longitude.toString()
        const coords = lat.concat(",",long)
        setCity(coords)
        setCoords(coords)
        cityDispatch(ChangeCity(city))
      })
    const fetchData = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${currentCity}`)
        const data = await response.json()
        setCityData(data)
        fetchDispatch(FetchData(cityData))

        // With free api the only option is 3 days
        const forecastResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${currentCity}&days=7`)
        const forecastData = await forecastResponse.json()
        setForecastData(forecastData)
    }
    fetchData()
  }, [apikey,currentCity, cityData, cityDispatch, fetchDispatch, city])

  return (
    <div className='container'>
      <Navbar />
      {/* Hero Content component shows today's weather.*/}
      <HeroContent cityData = {cityData} coords = {coords}/>
      {/* 
        ForecastGroup component shows the next 3 days from the Weather API.
        With the current free payment method only 3 days can be shown.
       */}
      <ForecastGroup cityForecastData = {cityForecastData}/>
    </div>
  );
}

export default App;
