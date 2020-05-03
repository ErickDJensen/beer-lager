const update = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_INFO':
            return action.payload;
        default:
            return state;
    }
}

export default update;