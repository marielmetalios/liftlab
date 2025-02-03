import { useState, FormEvent, changeEvent} from "react";

// we'll useState and start it off as empty string --
// setMuscleGroup allows muscleGroup state to be updated
// we also have a workouts state that can be updated with setWorkouts
// initial state is set to empty array - this will eventually pull in our workout table data
const muscleGroupForm = () => {
    const [muscleGroup, setMuscleGroup] = useState('');
    const [workouts, setWorkouts] = useState([]);
};

// new function to handle the HTML input change
// the e.target will look at the HTML element that triggered event and assign it to a new const called "selectedGroup"
// then we useState to update the setMuscleGroup TO that user's choice (i.e. "selectedGroup")
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedGroup = e.target;
    setMuscleGroup(selectedGroup);
};

// now we need a function to actually fetch the workouts --
// MAR - WE NEED TO ADD A ROUTE TO FILTER BY MUSCLE GROUP IN DATABASE, THEN UPDATE AWAIT FETCH TO MATCH URL ROUTE...
// we need async to wait on fetching the data
// parameter is the new muscleGroup state (i.e. selected)
// we
// the setWorkouts "state" will be updated to contain new retrieved/fetched data
const fetchWorkouts = async (muscleGroup) = {
    try {
        const response = await fetch(`api/workouts/${muscleGroup}`)
        const data = await response.json();
        setWorkouts(data);
    }
    catch (error)
    console.log(`Error getting data from table`)
}

// if the user selects a group, fetch workouts on that selected group,
// otherwise, clear workouts if they don't select a group
if (selectedGroup) {
    fetchWorkouts(selectedGroup);
} else {
    setWorkouts([]);
}

// handleSubmit function that takes the formevent as a parameter (i.e this will be a form submission event)
const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`User selected ${muscleGroup}`);
}

// javascript in curly braces for the return
// HTML form element is created, and the handlesubmit function is CALLED and executed when user clicks submit!
// the onChange event handler is set to handleChange which updates the muscleGroup state based on user selections! 
// we actually set the select value to the useState muscleGroup variable
return (
    <form onSubmit={handleSubmit}>
        <label>What muscle group do you want to workout today?</label>
        <select id="muscleGroupName" value={muscleGroup} onChange = {handleChange}>
            <option>Select from the below list</option>
            <option value="Arms">Arms</option>
            <option value="Leg">Legs</option>
            <option value="Core">Core</option>
            <option value="Back">Back</option>
            <option value="Chest">Chest</option>
        </select>
        <button type="submit">Submit</button>

{/* // and now we need the workouts to actually display on the page: */}
    <div>
        {workouts.length > 0 (
        <h1>Your Workout Options:</h1>
        <ul>
            {workouts.map(workout => (
                <li key={workout.id}>{workout.name}</li>
            ))};
        </ul>
    </div>
));
    </form>
)

export default muscleGroupForm;