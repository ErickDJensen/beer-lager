const beerLog = (state = [], action) => {
    switch (action.type) {
        case 'SET_BEERLOG':
            return action.payload;
        default:
            return state;
    }
}

export default beerLog;
