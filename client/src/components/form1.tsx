import { useState, FormEvent, ChangeEvent} from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { workoutInterface } from "../interfaces/Workouts";

// we'll useState and start it off as empty string --
// setMuscleGroup allows muscleGroup state to be updated
// we also have a workouts state that can be updated with setWorkouts
// initial state is set to empty array - this will eventually pull in our workout table data
const MuscleGroupForm = () => {
    const [muscleGroup, setMuscleGroup] = useState('');
    const [workouts, setWorkouts] = useState<workoutInterface[]>([]);
    const navigate = useNavigate();
    
// new function to handle the HTML input change
// the e.target will look at the HTML element that triggered event and assign it to a new const called "selectedGroup"
// then we useState to update the setMuscleGroup TO that user's choice (i.e. "selectedGroup")
// use HTML select element for users selection (not input here!)
const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedGroup = e.target.value;
    setMuscleGroup(selectedGroup);
    // fetchWorkouts = (selectedGroup);

// if the user selects a group, fetch workouts on that selected group,
// otherwise, clear workouts if they don't select a group
if (selectedGroup) {
    fetchWorkouts(selectedGroup);
} else {
    setWorkouts([]);
}
};


// now we need a function to actually fetch the workouts --
// we need async to wait on fetching the data
// parameter is the new muscleGroup state (i.e. selected)
// we
// the setWorkouts "state" will be updated to contain new retrieved/fetched data
const fetchWorkouts = async (muscleGroup: string) => {
    try {
        const response = await fetch(`api/exercises/${muscleGroup}`)
        const data = await response.json();
        setWorkouts(data);
    } catch (error) {
    console.log(`Error getting data from table`, error)
    }
};


// handleSubmit function that takes the formevent as a parameter (i.e this will be a form submission event)
// navigate passes workouts as state onto the Planner page
const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`User selected ${muscleGroup}`);
    navigate('/Planner', { state: { workouts } });
};

// javascript in curly braces for the return
// HTML form element is created, and the handlesubmit function is CALLED and executed when user clicks submit!
// the onChange event handler is set to handleChange which updates the muscleGroup state based on user selections! 
// we actually set the select value to the useState muscleGroup variable
// need to add styling
return (
    <div> 
        <form onSubmit={handleSubmit}>
        <label>Select a muscle group to focus on:</label>
        <select id="muscleGroupName" value={muscleGroup} onChange = {handleChange} role="button">
            <option value="">Choose from below options</option>
            <option value="Arms">Arms</option>
            <option value="Legs">Legs</option>
            <option value="Core">Core</option>
            <option value="Back">Back</option>
            <option value="Chest">Chest</option>
        </select>
        <div>
        <button style={{
            padding: '5px',
            fontSize: "12px",
            border: '1px solid #D3D3D3',
            width: '100px',
            margin: '5px',
            borderRadius: '8px'
            }}
            type="submit">Submit</button>
        </div>
    </form>
    </div>
)
};



export default MuscleGroupForm;