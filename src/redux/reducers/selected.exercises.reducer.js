const selectedExerciseReducer = (state = [], action) => {

    if (action.type === 'SET_SELECTED_EXERCISES') {
        return [...state, action.payload];
    }
        return state;
};

export default selectedExerciseReducer;