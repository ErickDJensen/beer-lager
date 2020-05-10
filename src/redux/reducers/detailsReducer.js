const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_ENTRYDETAILS':
            console.log('in set_entrydetails', action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default details;