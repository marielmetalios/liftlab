import { Exercises } from '../models/index.js';
export const seedExercises = async () => {
    await Exercises.bulkCreate([
        {
            muscleGroup: `Arm`,
            name: `Dumbell Curl`,
            repSets: `10x4`
        },
        {
            muscleGroup: `Leg`,
            name: ` Barbell Squat`,
            repSets: `8x5`
        },
    ]);
};
