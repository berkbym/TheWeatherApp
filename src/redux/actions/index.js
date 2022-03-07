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