import React from 'react'
import { useEffect, useState } from 'react'
import '../App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { CurrentLocation } from '../redux/actions'

export default function HeroContent() {

const [cityData,setCityData] = useState([])
const [city, setCity] = useState("Glasgow")
const [coords, setCoords] = useState("")
var apikey = 'd7d6e1e52e0f4736900125350211105'
const timeElapsed = Date.now();
const today = new Date(timeElapsed)
const isCurrentLocation = useSelector(state => state.isCurrentLocation)
const dispatch = useDispatch()


function setLocation() {
    dispatch(CurrentLocation())
    // set to show current location
    if (isCurrentLocation === true) {
        // permission allowed
        if (coords !== "") {
            setCity(coords)
        // permission denied
        } else {
            alert("Please allow location to see your city.")
        }
    // set to not use location
    } else {
        setCity("Glasgow")
    }
} 
    
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
        const data = await response.json()
        setCityData(data)
    }
    fetchData()
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude.toString()
        const long = position.coords.longitude.toString()
        const coords = lat.concat(",",long)
        setCoords(coords)
        setCity(coords)
      })
  }, [apikey,city])

  return (
    <div className='heroContent'>
        <section className='weatherTodayGroup'>
            <p className='date'>Today {today.toDateString()}</p>
            <p className='location'>{cityData?.location?.name},{cityData?.location?.country}</p>
            <button onClick={setLocation}>
            {isCurrentLocation ? "use my" : "use glasgow"}    
            </button>
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
