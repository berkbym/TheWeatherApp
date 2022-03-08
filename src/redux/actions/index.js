/**
 * @name CurrentLocation
 * @description Changes the value to display current location or default.
 */
export const CurrentLocation = () => {
    return {
        type: 'USE_CURRENT'
    }
}

/**
 * @name ChangeCity
 * @description Changes the user location to be fetched from the API. The default value is Glasgow.
 * @params city: String
 */
export const ChangeCity = (city) => {
    return {
        type: 'USE_CURRENT_CITY',
        payload: city
    }
}

/**
 * @name FetchData
 * @description Fetches the current day's weather data from the Weather API.
 * @params todayData: []
 */
export const FetchData = (todayData) => {
    return {
        type: 'FETCH_DATA',
        payload: todayData 
    }
}

/**
 * @name FetchForecastData
 * @description Fetches the current week's weather data from the Weather API.
 * @params forecastData: []
 */
export const FetchForecastData = (forecastData) => {
    return {
        type: 'FETCH_FORECAST_DATA',
        payload: forecastData
    }
}