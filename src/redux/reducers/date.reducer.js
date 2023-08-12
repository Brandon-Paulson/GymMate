const exerciseReducer = (state = [], action) => {

    if (action.type === 'SET_DATE') {
        return action.payload;
    }
        return state;
};

export default exerciseReducer;