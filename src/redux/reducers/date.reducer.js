import dayjs from "dayjs";

const dateReducer = (state = [], action) => {

    if (action.type === 'SET_DATE') {
       let newDate = dayjs(action.payload).format('YYYY/MM/DD');
        window.localStorage.setItem("date", newDate)
        return  action.payload;
    }
        return state;
};

export default dateReducer;