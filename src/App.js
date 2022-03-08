import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ChangeCity, FetchData, FetchForecastData } from './redux/actions'
import './App.scss';
import ForecastGroup from './components/ForecastGroup';
import HeroContent from './components/HeroContent';
import Navbar from './components/Navbar';

function App() {

  let apikey = process.env.REACT_APP_API_KEY
  const [cityData,setCityData] = useState([])
  const [city, setCity] = useState('Glasgow')
  const [coords, setCoords] = useState('')
  const currentCity = useSelector(state => state.currentCity)
  const cityDispatch = useDispatch()
  const fetchDispatch = useDispatch()
  const fetchForecastDispatch = useDispatch()

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
      // Current day's weather data.
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${currentCity}`)
      const data = await response.json()
      setCityData(data)
      fetchDispatch(FetchData(data))

      // 7 days weather forecast data.
      const forecastResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${currentCity}&days=7`)
      const forecastData = await forecastResponse.json()
      fetchForecastDispatch(FetchForecastData(forecastData))
    }
    fetchData()
  }, [apikey, city, currentCity, cityData, cityDispatch, fetchDispatch, fetchForecastDispatch])

  return (
    <div className='container'>
      <Navbar />
      {/* Hero Content component shows today's weather.*/}
      <HeroContent coords = {coords} />
      {/* 
        ForecastGroup component shows the next 3 days from the Weather API.
        With the current free payment method only 3 days can be shown.
       */}
      <ForecastGroup />
    </div>
  );
}

export default App;
