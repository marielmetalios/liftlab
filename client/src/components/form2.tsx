import React, {useState, FormEvent} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Form2: React.FC = () => {
  
  const [muscleGroup, setMuscleGroup] = useState('Arms');
  const [equipment, setEquipment] = useState('');
  const [repsSets, setRepsSets] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('User submitted the form');
    console.log('Muscle Group:', muscleGroup);
    console.log('Equipment:', equipment);
    console.log('Reps X Sets:', repsSets);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Select a Muscle Group:</label>
        <select className="form-control" id="exampleFormControlSelect1" value={muscleGroup} onChange={(e) => setMuscleGroup(e.target.value)}>
          <option>Arms</option>
          <option>Legs</option>
          <option>Chest</option>
          <option>Abs</option>
          <option>Back</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="equipmentTextarea">Workout:</label>
        <textarea
          className="form-control"
          id="equipmentTextarea"
          rows={1}
          required
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
        ></textarea>
        <div className="invalid-tooltip">
          Please provide a value.
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="repsSetsTextarea">Reps X Sets?</label>
        <textarea
          className="form-control"
          id="repsSetsTextarea"
          rows={1}
          required
          value={repsSets}
          onChange={(e) => setRepsSets(e.target.value)}
        ></textarea>
        <div className="invalid-tooltip">
          Please provide a value.
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Add Workout
      </button>
    </form>
  );
};

export default Form2;
