const noteReducer = (state = [], action) => {

    if (action.type === 'SET_NOTES') {
        return [action.payload];
    }
        return state;
};

export default noteReducer;