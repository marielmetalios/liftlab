import MuscleGroupForm from "../components/form1";
import UserWorkout from "../components/form2";

const formPage = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Get a Workout</h1>
            <MuscleGroupForm />
          </div>
        <div className="col-md-6">
            <h1>Log a Workout</h1>
            <UserWorkout />
        </div>
      </div>
    </div>
    );
  }

  export default formPage