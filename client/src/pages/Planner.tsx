//using useLocation hook access the route's location "state" -- we can retrieve the workout data from another page 
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { workoutInterface } from '../interfaces/Workouts';

const Planner = () => {
    const location = useLocation();
// we can get the workouts from location state
// default to an empty array in case no workouts are found / underfined
    const workouts = location.state?.workouts || [];
// stores available workouts (retrieved based on user selection)
    const [workoutOptions, setWorkoutOptions] = useState<workoutInterface[]>(workouts);
// stores list that user selects in their routine
    const [workoutRoutine, setWorkoutRoutine] = useState<workoutInterface[]>([]);

    const handleWorkoutClick = (workout: workoutInterface) => {
// updates available workout list
        setWorkoutRoutine((prev) => [...prev, workout]);
// allows the the clicked workout list to be updated
        setWorkoutOptions((prev) => prev.filter((w) => w.id !== workout.id));
    };

    // mar added optional chaining to get equipment name in
    return (
        <div> 
            <div className = "container-md">
            <h2>Your Workout Options:</h2>
            <p>Click to add to your workout routine</p>
                {workoutOptions.length > 0 ? (
                    workoutOptions.map((workout: any) => (
                        <div className="card" key={workout.id} onClick={() => handleWorkoutClick(workout)}>
                            <h3>{workout.name}</h3>
                            <p>{`Reps x Sets: ${workout.repSets}`}</p>
                            <p>{`Equipment: ${workout.equipment?.name || 'None'}`}</p>
                        </div>
                    ))
                ) : (
                    <p>No additional exercises available. Feel free go back and add some to our database.</p>
                )}
            </div>
        
            <div className = "container-md">
            <h2>Your Workout Routine:</h2>
            {workoutRoutine.length > 0 ? (
                    workoutRoutine.map((workout : any) => (
                        <div className="card" key={workout.id}>
                            <h3>{workout.name}</h3>
                            <p>{`Reps x Sets: ${workout.repSets}`}</p>
                            <p>{`Equipment: ${workout.equipment?.name || 'None'}`}</p>
                        </div>
                    ))
                ) : (
                    <p>No workouts selected.</p>
                )}
            </div>
        </div>
    );
};

export default Planner;