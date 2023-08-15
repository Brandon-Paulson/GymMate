const selectedExerciseReducer = (state = [], action) => {

    if (action.type === 'SET_SELECTED_EXERCISES') {
        return [action.payload];
    }
        return state;
};

export default selectedExerciseReducer;