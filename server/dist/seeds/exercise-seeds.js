import { Exercises } from '../models/index.js';
export const seedExercises = async () => {
    await Exercises.bulkCreate([
        {
            muscleGroup: `Arms`,
            name: `Barbell Curl`,
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
            id: 4
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
        {
            muscleGroup: `Arms`,
            name: `Hammer Curl`,
            repSets: `12x3`,
            id: 11
        },
        {
            muscleGroup: `Arms`,
            name: `Overhead Tricep Extension`,
            repSets: `10x3`,
            id: 12
        },
        {
            muscleGroup: `Arms`,
            name: `Concentration Curl`,
            repSets: `10x3`,
            id: 13
        },
        {
            muscleGroup: `Arms`,
            name: `Cable Curl`,
            repSets: `12x3`,
            id: 14
        },
        {
            muscleGroup: `Arms`,
            name: `Skull Crushers`,
            repSets: `10x3`,
            id: 15
        },
        {
            muscleGroup: `Arms`,
            name: `Reverse Curl`,
            repSets: `12x3`,
            id: 16
        },
        {
            muscleGroup: `Arms`,
            name: `Zottman Curl`,
            repSets: `12x3`,
            id: 17
        },
        {
            muscleGroup: `Legs`,
            name: `Lunge`,
            repSets: `12x3`,
            id: 18
        },
        {
            muscleGroup: `Legs`,
            name: `Leg Press`,
            repSets: `10x4`,
            id: 19
        },
        {
            muscleGroup: `Legs`,
            name: `Hamstring Curl`,
            repSets: `12x3`,
            id: 20
        },
        {
            muscleGroup: `Legs`,
            name: `Glute Bridge`,
            repSets: `15x3`,
            id: 21
        },
        {
            muscleGroup: `Legs`,
            name: `Romanian Deadlift`,
            repSets: `8x4`,
            id: 22
        },
        {
            muscleGroup: `Legs`,
            name: `Step Up`,
            repSets: `12x3`,
            id: 23
        },
        {
            muscleGroup: `Legs`,
            name: `Side Lunge`,
            repSets: `12x3`,
            id: 24
        },
        {
            muscleGroup: `Chest`,
            name: `Incline Bench Press`,
            repSets: `10x3`,
            id: 25
        },
        {
            muscleGroup: `Chest`,
            name: `Decline Bench Press`,
            repSets: `10x3`,
            id: 26
        },
        {
            muscleGroup: `Chest`,
            name: `Chest Dips`,
            repSets: `12x3`,
            id: 27
        },
        {
            muscleGroup: `Chest`,
            name: `Push Up`,
            repSets: `20x3`,
            id: 28
        },
        {
            muscleGroup: `Chest`,
            name: `Cable Crossover`,
            repSets: `15x3`,
            id: 29
        },
        {
            muscleGroup: `Chest`,
            name: `Dumbbell Press`,
            repSets: `10x4`,
            id: 30
        },
        {
            muscleGroup: `Chest`,
            name: `Pec Deck Fly`,
            repSets: `15x3`,
            id: 31
        },
        {
            muscleGroup: `Chest`,
            name: `Standing Chest Press`,
            repSets: `12x3`,
            id: 32
        },
        {
            muscleGroup: `Back`,
            name: `Lat Pulldown`,
            repSets: `12x4`,
            id: 33
        },
        {
            muscleGroup: `Back`,
            name: `Deadlift`,
            repSets: `8x4`,
            id: 34
        },
        {
            muscleGroup: `Back`,
            name: `Reverse Fly`,
            repSets: `15x3`,
            id: 35
        },
        {
            muscleGroup: `Back`,
            name: `Pull Up`,
            repSets: `10x3`,
            id: 36
        },
        {
            muscleGroup: `Back`,
            name: `Seated Cable Row`,
            repSets: `12x3`,
            id: 37
        },
        {
            muscleGroup: `Back`,
            name: `T-Bar Row`,
            repSets: `10x3`,
            id: 38
        },
        {
            muscleGroup: `Back`,
            name: `Single Arm Dumbbell Row`,
            repSets: `12x3`,
            id: 39
        },
        {
            muscleGroup: `Back`,
            name: `Hyperextensions`,
            repSets: `15x3`,
            id: 40
        },
        {
            muscleGroup: `Back`,
            name: `Inverted Row`,
            repSets: `10x3`,
            id: 41
        },
        {
            muscleGroup: `Core`,
            name: `Russian Twist`,
            repSets: `20x3`,
            id: 42
        },
        {
            muscleGroup: `Core`,
            name: `Leg Raise`,
            repSets: `15x3`,
            id: 43
        },
        {
            muscleGroup: `Core`,
            name: `Sit Up`,
            repSets: `15x3`,
            id: 44
        },
        {
            muscleGroup: `Core`,
            name: `Bicycle Crunch`,
            repSets: `20x3`,
            id: 45
        },
        {
            muscleGroup: `Core`,
            name: `Mountain Climbers`,
            repSets: `30 secs x 3`,
            id: 46
        },
        {
            muscleGroup: `Core`,
            name: `V-Up`,
            repSets: `12x3`,
            id: 47
        },
        {
            muscleGroup: `Core`,
            name: `Reverse Crunch`,
            repSets: `15x3`,
            id: 48
        },
        {
            muscleGroup: `Core`,
            name: `Flutter Kicks`,
            repSets: `30 secs x 3`,
            id: 49
        },
        {
            muscleGroup: `Core`,
            name: `Woodchoppers`,
            repSets: `12x3`,
            id: 50
        }
    ]);
};
