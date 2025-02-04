import React, { useState, FormEvent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form2() {
  const [muscleGroup, setMuscleGroup] = useState('Arms');
  const [name, setName] = useState(''); 
  const [repSets, setRepSets] = useState(''); 
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();


    const exerciseData = { muscleGroup, name, repSets };

    try {
      const response = await fetch('api/exercises/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(exerciseData),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(`Exercise added with ID: ${result.id}`);
      } else {
        setMessage('Failed to add exercise');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error occurred while adding exercise');
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
            <option>Abs</option>
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
        <button className="btn btn-primary" type="submit">
          Add Workout
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Form2;
