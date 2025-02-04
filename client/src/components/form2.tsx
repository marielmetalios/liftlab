import { useState, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form2() {
  const [muscleGroup, setMuscleGroup] = useState('Arms');
  const [name, setName] = useState('');
  const [repSets, setRepSets] = useState('');
  const [message, setMessage] = useState<string>('');
  const [equipment, setEquipment] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    
    const exerciseData = { muscleGroup, name, repSets };
    console.log('Exercise Data:', exerciseData); 
    try {
      
      const exerciseResponse = await fetch('/api/exercises', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(exerciseData),
      });

      if (!exerciseResponse.ok) {
        throw new Error('Failed to add exercise');
      }

      const exerciseResult = await exerciseResponse.json();
      console.log('Exercise Result:', exerciseResult); 
      if (!exerciseResult.id) {
        setMessage('Failed to create exercise');
        return;
      }

      
      const equipmentDataToSend = { exerciseId: exerciseResult.id, equipment };
      console.log('Equipment Data:', equipmentDataToSend);  

      
      const equipmentResponse = await fetch('/api/equipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(equipmentDataToSend),
      });

      if (!equipmentResponse.ok) {
        throw new Error('Failed to add equipment');
      }

      const equipmentResult = await equipmentResponse.json();
      console.log('Equipment Result:', equipmentResult);  
      setMessage('Exercise and equipment added successfully');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error occurred while adding data');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Select a Muscle Group:</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            value={muscleGroup}
            onChange={(e) => setMuscleGroup(e.target.value)}
          >
            <option>Arms</option>
            <option>Legs</option>
            <option>Chest</option>
            <option>Core</option>
            <option>Back</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="nameTextarea">Exercise Name:</label>
          <textarea
            className="form-control"
            id="nameTextarea"
            rows={1}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="repSetsTextarea">Reps X Sets:</label>
          <textarea
            className="form-control"
            id="repSetsTextarea"
            rows={1}
            required
            value={repSets}
            onChange={(e) => setRepSets(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="equipmentTextarea">Equipment:</label>
          <textarea
            className="form-control"
            id="equipmentTextarea"
            rows={1}
            required
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Add Workout
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Form2;