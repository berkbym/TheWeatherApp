const currentLocationReducer = (state = false, action) => {
    switch(action.type) {
        case 'USE_CURRENT':
            return !state;
        default:
            return state
    }
}

export default currentLocationReducer;