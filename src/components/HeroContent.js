import React from 'react'
import { useEffect, useState } from 'react'
import '../App.scss'
import { useSelector, useDispatch } from 'react-redux'
import { CurrentLocation, ChangeCity } from '../redux/actions'
import { LocationOn, LocationOnOutlined} from '@material-ui/icons'

export default function HeroContent(props) {

const timeElapsed = Date.now();
const today = new Date(timeElapsed)
const isCurrentLocation = useSelector(state => state.isCurrentLocation)

function setLocation() {
    console.log('print')
} 

  return (
    <div className='heroContent'>
        <section className='weatherTodayGroup'>
            <p className='date'>Today {today.toDateString()}</p>
            <p className='location'>
                {props.cityData?.location?.name},{props.cityData?.location?.country}
                <span>{isCurrentLocation ? <LocationOnOutlined onClick={setLocation} fontSize='large'/> : <LocationOn onClick={setLocation} fontSize='large' />}</span> 
            </p>
            <p id='condition'>{props.cityData?.current?.condition?.text}</p>
            <div className='weatherDetailGroup'>
                <div className='iconGroup'>
                    <p>{Math.ceil(props.cityData?.current?.temp_c)}&deg;</p>
                    <img src={props.cityData?.current?.condition?.icon} alt=""/>
                </div>
                <table className='table'>
                <tr>
                    <td>Feels Like</td>
                    <td>{Math.ceil(props.cityData?.current?.feelslike_c)}&deg;</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>{props.cityData?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind</td>
                    <td>{props.cityData?.current?.wind_dir} {Math.ceil(props.cityData?.current?.wind_kph)} km/h</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>{props.cityData?.current?.pressure_mb} mb</td>
                </tr>
            </table>
            </div>
        </section>
    </div>
  )
}
