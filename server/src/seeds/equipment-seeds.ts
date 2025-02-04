import { Equipment } from '../models/index.js';

export const seedEquipment = async () => {
  await Equipment.bulkCreate([
    { id: 1, equipment: `Dumbbell`, exercise_id: 2 },
    { id: 2, equipment: `Barbell`, exercise_id: 1 },
    { id: 3, equipment: `Dip Bar`, exercise_id: 3 },
    { id: 4, equipment: `Barbell`, exercise_id: 4 },
  ]);
};
