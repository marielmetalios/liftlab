import { Equipment } from '../models/index.js';

export const seedEquipment = async () => {
  await Equipment.bulkCreate([
    { id: 1, equipment: `Dumbbell`, exercise_id: 2 },
    { id: 2, equipment: `Barbell`, exercise_id: 1 },
    { id: 3, equipment: `Dip Bar`, exercise_id: 3 },
    { id: 4, equipment: `Barbell`, exercise_id: 4 },
    { id: 5, equipment: `Bodyweight`, exercise_id: 5 },
    { id: 6, equipment: `None`, exercise_id: 6 },
    { id: 7, equipment: `Barbell`, exercise_id: 7 },
    { id: 8, equipment: `Dumbbell`, exercise_id: 8 },
    { id: 9, equipment: `Cable Machine`, exercise_id: 9 },
    { id: 10, equipment: `Bodyweight`, exercise_id: 10 },
    { id: 11, equipment: `Dumbbell`, exercise_id: 11 },
    { id: 12, equipment: `Dumbbell`, exercise_id: 12 },
    { id: 13, equipment: `Dumbbell`, exercise_id: 13 },
    { id: 14, equipment: `Cable Machine`, exercise_id: 14 },
    { id: 15, equipment: `Barbell`, exercise_id: 15 },
    { id: 16, equipment: `Barbell`, exercise_id: 16 },
    { id: 17, equipment: `Dumbbell`, exercise_id: 17 },
    { id: 18, equipment: `Bodyweight`, exercise_id: 18 },
    { id: 19, equipment: `Leg Press Machine`, exercise_id: 19 },
    { id: 20, equipment: `Leg Curl Machine`, exercise_id: 20 },
    { id: 21, equipment: `Bodyweight`, exercise_id: 21 },
    { id: 22, equipment: `Barbell`, exercise_id: 22 },
    { id: 23, equipment: `Box or Step`, exercise_id: 23 },
    { id: 24, equipment: `Bodyweight`, exercise_id: 24 },
    { id: 25, equipment: `Barbell`, exercise_id: 25 },
    { id: 26, equipment: `Barbell`, exercise_id: 26 },
    { id: 27, equipment: `Dip Bar`, exercise_id: 27 },
    { id: 28, equipment: `Bodyweight`, exercise_id: 28 },
    { id: 29, equipment: `Cable Machine`, exercise_id: 29 },
    { id: 30, equipment: `Dumbbell`, exercise_id: 30 },
    { id: 31, equipment: `Pec Deck Machine`, exercise_id: 31 },
    { id: 32, equipment: `Cable Machine`, exercise_id: 32 },
    { id: 33, equipment: `Cable Machine`, exercise_id: 33 },
    { id: 34, equipment: `Barbell`, exercise_id: 34 },
    { id: 35, equipment: `Dumbbell`, exercise_id: 35 },
    { id: 36, equipment: `Pull-Up Bar`, exercise_id: 36 },
    { id: 37, equipment: `Cable Machine`, exercise_id: 37 },
    { id: 38, equipment: `Barbell`, exercise_id: 38 },
    { id: 39, equipment: `Dumbbell`, exercise_id: 39 },
    { id: 40, equipment: `Roman Chair`, exercise_id: 40 },
    { id: 41, equipment: `Bar or Rings`, exercise_id: 41 },
    { id: 42, equipment: `Bodyweight`, exercise_id: 42 },
    { id: 43, equipment: `Bodyweight`, exercise_id: 43 },
    { id: 44, equipment: `Bodyweight`, exercise_id: 44 },
    { id: 45, equipment: `Bodyweight`, exercise_id: 45 },
    { id: 46, equipment: `Bodyweight`, exercise_id: 46 },
    { id: 47, equipment: `Bodyweight`, exercise_id: 47 },
    { id: 48, equipment: `Bodyweight`, exercise_id: 48 },
    { id: 49, equipment: `Bodyweight`, exercise_id: 49 },
    { id: 50, equipment: `Cable Machine`, exercise_id: 50 }
  ]);
};
