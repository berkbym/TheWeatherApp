const forecastData = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_FORECAST_DATA':
            return state = action.payload
        default:
            return state
    }
}

export default forecastData