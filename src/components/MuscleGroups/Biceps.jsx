


// const bicepGroup = fetch('https://api.api-ninjas.com/v1/exercises?muscle=biceps' )

var muscle = 'biceps'

const fetchBicepExercises = () => {fetch({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    headers: { 'X-Api-Key': process.env.EXERCISE_API_KEY},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
})
};

fetchBicepExercises();



export default function Biceps() {
    return (
        <div>
        {/* {fetchBicepExercises} */}
        </div>
    )
};
