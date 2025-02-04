import { Equipment } from '../models/index.js';
export const seedEquipment = async () => {
    await Equipment.bulkCreate([
        { id: 1, equipment: `Dumbbell`, exercise_id: 2 },
        { id: 2, equipment: `Barbell`, exercise_id: 1 },
        { id: 3, equipment: `Dip Bar`, exercise_id: 3 },
        { id: 4, equipment: `Barbell`, exercise_id: 4 },
    ]);
};
// import { Equipment } from '../models/index.js';
// export const seedEquipment = async () => {
//   try {
//     await Equipment.bulkCreate([
//       { id: 1, equipment: `Dumbbell`, exercise_id: 2 },
//       { id: 2, equipment: `Barbell`, exercise_id: 1 },
//       { id: 3, equipment: `Dip Bar`, exercise_id: 3 },
//       { id: 4, equipment: `Barbell`, exercise_id: 4 },
//     ]);
//     console.log("Seed data inserted successfully!");
//   } catch (error) {
//     console.error("Error seeding data: ", error);
//   }
// };
