import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form2: React.FC = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Select a Muscle Group:</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>Arms</option>
          <option>Legs</option>
          <option>Chest</option>
          <option>Abs</option>
          <option>Back</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="equipmentTextarea">Equipment?</label>
        <textarea
          className="form-control"
          id="equipmentTextarea"
          rows={1}
          required
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
