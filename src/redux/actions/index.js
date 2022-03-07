export const CurrentLocation = () => {
    return {
        type: 'USE_CURRENT'
    }
}

export const ChangeCity = (city) => {
    return {
        type: 'USE_CURRENT_CITY',
        payload: city
    }
}

export const FetchData = (todayData) => {
    return {
        type: 'FETCH_DATA',
        payload: todayData
    }
}