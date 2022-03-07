import currentLocationReducer from "./isCurrentLocation";
import changeCity from "./changeCity";
import { combineReducers } from "redux";

const reducers = combineReducers({
    isCurrentLocation: currentLocationReducer,
    changeCity: changeCity
})

export default reducers