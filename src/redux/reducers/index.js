import currentLocationReducer from "./isCurrentLocation";
import currentCity from "./currentCity";
import todayData from './todayData'
import forecastData from "./forecastData";
import { combineReducers } from "redux";

const reducers = combineReducers({
    isCurrentLocation: currentLocationReducer,
    currentCity: currentCity,
    todayData: todayData,
    forecastData: forecastData
})

export default reducers