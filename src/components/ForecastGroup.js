import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../App.scss'

export default function ForecastGroup(props) {
  return (
    <div className='forecastGroup'>
        <p className='title'>This Week's Weather Forecast</p>
        <div className='forecastTable'>
          {props.cityForecastData?.forecast?.forecastday?.map(
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
