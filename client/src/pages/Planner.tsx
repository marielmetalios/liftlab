import { useLocation } from "react-router-dom";
import { useState } from "react";
import workoutInterface from "./interfaces/workoutInterface";

const Planner = () => {
    const location = useLocation();
    const workouts = location.state?.workouts || [];
    
    
    const [workoutOptions, setWorkoutOptions] = useState<workoutInterface[]>(workouts);
    const [selectedWorkouts, setSelectedWorkouts] = useState<workoutInterface[]>([]);
    

    
    const handleWorkoutClick = (workout: workoutInterface) => {
        setSelectedWorkouts((prev) => [...prev, workout]);
        setWorkoutOptions((prev) => prev.filter((w) => w.id !== workout.id));
    };

   
    const handleSelectedWorkoutClick = async (workout: workoutInterface) => {
        const isConfirmed = window.confirm(`Do you want to save ${workout.name} to your routine?`);

        if (!isConfirmed) return;

        const username = localStorage.getItem("username");

        try {
            const response = await fetch(`api/users/favorite-workout`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    exercise_id: workout.id,
                    isFavorite: true,
                }),
            });

            if (response.ok) {
                console.log("Workout saved successfully!");
                
            } else {
                console.error("Failed to save workout.");
            }
        } catch (error) {
            console.error("Error sending request:", error);
        }
    };

    
    const [buttonState,setButtonState]= useState("alert alert-secondary");

    const deleteCard = (workout:workoutInterface) => {
    setSelectedWorkouts((prev) => prev.filter((w) => w.id !== workout.id));
    };

    return (
        <div> 
           
            <div className="container-md">
                <h2>Your Workout Options:</h2>
                <p>Click to add to your workout routine</p>
                {workoutOptions.length > 0 ? (
                    workoutOptions.map((workout) => (
                        <div className="card" key={workout.id} onClick={() => handleWorkoutClick(workout)}>
                            <h3>{workout.name}</h3>
                            <p>{`Reps x Sets: ${workout.repSets}`}</p>
                            <p>{`Equipment: ${workout.equipment?.name || "None"}`}</p>
                        </div>
                    ))
                ) : (
                    <p>No additional exercises available. Feel free to go back and add some to the database.</p>
                )}
            </div>

            <div className="container-md">
                <h2>Your Workout Routine:</h2>
                {selectedWorkouts.length > 0 ? (
                    selectedWorkouts.map((workout) => (
                        <div className="card" key={workout.id} >
                            <button onClick={() => handleSelectedWorkoutClick(workout)}>Add to favorites?</button>
                            <button className={buttonState} onClick={() => setButtonState("alert alert-success")}>Mark as Complete?</button>
                            <button onClick={() => deleteCard(workout)}>Delete workout</button>
                            <h3>{workout.name}</h3>
                            <p>{`Reps x Sets: ${workout.repSets}`}</p>
                            <p>{`Equipment: ${workout.equipment?.name || "None"}`}</p>
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