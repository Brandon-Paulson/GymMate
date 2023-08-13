import dayjs from "dayjs";

const dateReducer = (state = [], action) => {

    if (action.type === 'SET_DATE') {
       let newDate = dayjs(action.payload).format('YYYY/MM/DD');
       console.log('DOES THE NEW DATE', newDate);
        window.localStorage.setItem("date", newDate)
        return  action.payload;
    }
        return state;
};

export default dateReducer;