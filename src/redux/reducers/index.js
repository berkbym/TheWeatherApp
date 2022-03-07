import currentLocationReducer from "./isCurrentLocation";
import { combineReducers } from "redux";

const reducers = combineReducers({
    isCurrentLocation: currentLocationReducer
})

export default reducers