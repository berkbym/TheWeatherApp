import currentLocationReducer from "./isCurrentLocation";
import currentCity from "./currentCity";
import { combineReducers } from "redux";

const reducers = combineReducers({
    isCurrentLocation: currentLocationReducer,
    currentCity: currentCity
})

export default reducers