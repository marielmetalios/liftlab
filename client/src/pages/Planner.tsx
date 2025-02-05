
//using useLocation hook access the route's location "state" -- we can retrieve the workout data from another page 
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { workoutInterface } from '../interfaces/Workouts';


const Planner = () => {
    const location = useLocation();
// we can get the workouts from location state
// default to an empty array in case no workouts are found / underfined
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
        <div className = "flex-container" style={{ display: 'flex', gap: '30px', marginTop: '80px' }}> 
            <div className="container-md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 >Your Workout Options:</h2>
                <p>Click to add to your workout routine</p>
                {workoutOptions.length > 0 ? (
                    workoutOptions.map((workout) => (
                        <div className="card" 
                        style={{ 
                            width: '200px', 
                            padding: '10px', 
                            border: '1px solid #D3D3D3',
                            borderRadius: '8px',
                            margin: '5px' }}
                        key={workout.id} onClick={() => handleWorkoutClick(workout)}>
                            <h3 style ={{fontSize: '20px'}}>{workout.name}</h3>
                            <p>{`Reps x Sets: ${workout.repSets}`}</p>
                            {/* <p>{`Equipment: ${workout.equipment?.equipment || "None"}`}</p> */}
                        </div>
                    ))
                ) : (
                    <p>No additional exercises available. Feel free to go back and add some to the database.</p>
                )}
            </div>
            <div className="container-md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Your Workout Routine:</h2>
                <button
                            style={{
                                padding: '5px',
                                fontSize: "12px",
                                border: '1px solid #D3D3D3',
                                width: '200px',
                                margin: '5px',
                                borderRadius: '8px'
                            }}
                            className={buttonState} onClick={() => setButtonState("alert alert-success")}>Mark as Complete?</button>
                {selectedWorkouts.length > 0 ? (
                    selectedWorkouts.map((workout) => (
                        <div className="card"
                        style={{ 
                        display: 'block',
                        width: '200px', 
                        padding: '10px', 
                        border: '1px solid #D3D3D3', 
                        borderRadius: '8px', 
                        margin: '5px' 
                        }} 
                        key={workout.id} >
                        <h3 style ={{fontSize: '20px'}} >{workout.name}</h3>
                        <p>{`Reps x Sets: ${workout.repSets}`}</p>
                            {/* <p>{`Equipment: ${workout.equipment?.equipment || "None"}`}</p> */}
                        <button 
                            style={{
                                padding: '5px',
                                fontSize: "12px",
                                border: '1px solid #D3D3D3',
                                width: '100px',
                                margin: '5px',
                                borderRadius: '8px'
                            }}
                            onClick={() => handleSelectedWorkoutClick(workout)}>Add to favorites?</button>
                        <button
                            style={{
                                padding: '5px',
                                fontSize: "12px",
                                border: '1px solid #D3D3D3',
                                width: '100px',
                                margin: '5px',
                                borderRadius: '8px'
                            }}                            
                            onClick={() => deleteCard(workout)}>Delete workout</button>
                        </div>
                    ))
                ) : (
                    <p>Please select a workout from your options</p>
                )}
            </div>
            </div>
        </div>
    );
};

export default Planner;