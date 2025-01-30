import { Exercises } from '../models/index.js';

export const seedExercises = async () => {
  await Exercises.bulkCreate([
    {
      muscleGroup: `Bicep`,
      name: `Dumbell Curl`,

    },
  ]);
};
