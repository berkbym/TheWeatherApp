import React from 'react'
import '../App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { CurrentLocation, ChangeCity } from '../redux/actions'
import { LocationOn, LocationOnOutlined} from '@material-ui/icons'

export default function HeroContent(props) {

const timeElapsed = Date.now();
const today = new Date(timeElapsed)
const isCurrentLocation = useSelector(state => state.isCurrentLocation)
const cityDispatch = useDispatch()
const dispatch = useDispatch()
const todayData = useSelector(state => state.todayData)

/**
 * @name changeLocation
 * @description Changes the user location to be fetched from the API. The default value is Glasgow.
 */
function changeLocation() {
    dispatch(CurrentLocation(!isCurrentLocation))
    if (isCurrentLocation === true) {
        // Location permission allowed
        if (props.coords !== "") {
            cityDispatch(ChangeCity(props.coords))
        } 
        // Location permission denied
        else {
        alert("Please allow location access to see your current location!")
        }  
    } else if (isCurrentLocation === false) {
        cityDispatch(ChangeCity('Glasgow'))
    }
} 

  return (
    <section className='heroContent'>
        <div className='weatherTodayGroup'>
            <p className='date'>Today {today.toDateString()}</p>
            <p className='location'>
                {todayData?.location?.name},{todayData?.location?.country}
                <span>{isCurrentLocation ? <LocationOnOutlined onClick={changeLocation} fontSize='large'/> : <LocationOn onClick={changeLocation} fontSize='large' />}</span> 
            </p>
            <p id='condition'>{todayData?.current?.condition?.text}</p>
            <div className='weatherDetailGroup'>
                <div className='iconGroup'>
                    <p>{Math.ceil(todayData?.current?.temp_c)}&deg;</p>
                    <img src={todayData?.current?.condition?.icon} alt=""/>
                </div>
                <table className='table'>
                    <tbody>
                        <tr>
                        <td>Feels Like</td>
                        <td>{Math.ceil(todayData?.current?.feelslike_c)}&deg;</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{todayData?.current?.humidity}%</td>
                        </tr>
                        <tr>
                            <td>Wind</td>
                            <td>{todayData?.current?.wind_dir} {Math.ceil(todayData?.current?.wind_kph)} km/h</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{todayData?.current?.pressure_mb} mb</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}
