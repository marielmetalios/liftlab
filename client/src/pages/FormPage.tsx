import MuscleGroupForm from "../components/form1";
import UserWorkout from "../components/form2";

const formPage = () => {
    return (
      <div>
        <h1>Get a Workout</h1>
        <MuscleGroupForm />
        <div>
        <h1>Add a Workout</h1>
        <UserWorkout />
        </div>
      </div>
    );
  }

  export default formPage