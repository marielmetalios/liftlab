import MuscleGroupForm from "../components/form1";
import Form2 from "../components/form2";


const FormPage = () => {
    return (
      <div>
        <h1>Your Workouts</h1>
        <MuscleGroupForm />
        <h1>Add a workout</h1>
        <Form2 />
      </div>
    );
  }

  export default FormPage;