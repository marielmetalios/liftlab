import MuscleGroupForm from "../components/form1";
import UserWorkout from "../components/form2";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

const formPage = () => {
  const {width, height} =useWindowSize()
    return (
      <div className="container">
               <Confetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={1000}
      drawShape={ctx => {
        ctx.beginPath()
        for(let i = 0; i < 22; i++) {
          const angle = 0.35 * i
          const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
          const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
          ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.closePath()
      }}
    />
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