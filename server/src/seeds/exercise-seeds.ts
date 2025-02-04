import { Exercises } from '../models/index.js';

export const seedExercises = async () => {
  await Exercises.bulkCreate([
    {
      muscleGroup: `Arms`,
      name: `Dumbell Curl`,
      repSets: `10x4`,
      id: 1
    },
    {
      muscleGroup: `Arms`,
      name: `Bicep Curl`,
      repSets: `15x2`,
      id: 2

    },
    {
      muscleGroup: `Arms`,
      name: `Tricep Dip`,
      repSets: `8x3`,
      id: 3

    },
    {
        muscleGroup: `Legs`,
        name: `Barbell Squat`,
        repSets: `8x5`,
        id: 4,
      },
      {
        muscleGroup: `Legs`,
        name: `Jump Squat`,
        repSets: `30x2`,
        id: 5
      },   
      {
        muscleGroup: `Legs`,
        name: `Calf Raises`,
        repSets: `15x4`,
        id: 6
      },
      {
        muscleGroup: `Chest`,
        name: `Bench Press`,
        repSets: `15x4`,
        id: 7
      },
      {
        muscleGroup: `Chest`,
        name: `Dumbell Fly`,
        repSets: `15x4`,
        id: 8
      },
      {
        muscleGroup: `Back`,
        name: `Row`,
        repSets: `15x4`,
        id: 9

      },
      {
        muscleGroup: `Core`,
        name: `Plank`,
        repSets: `30 secs x 2`,
        id: 10
      },
  ]);
};