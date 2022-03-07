const currentCity = (state = "Glasgow", action) => {
    switch(action.type) {
        case 'USE_CURRENT_CITY':
            return state = action.payload
        default:
            return state
    }
}

export default currentCity