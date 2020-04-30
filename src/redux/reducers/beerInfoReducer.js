const beerInfo = (state = [], action) => {
    switch (action.type) {
        case 'SET_BEERINFO':
            return action.payload;
        default:
            return state;
    }
}

export default beerInfo;