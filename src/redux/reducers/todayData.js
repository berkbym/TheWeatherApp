const todayData = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_DATA':
            return state = action.payload
        default:
            return state
    }
}

export default todayData