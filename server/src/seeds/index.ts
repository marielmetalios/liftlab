import { seedExercises } from './exercise-seeds.js';
import { seedUsers } from './user-seeds.js';
import { seedEquipment } from './equipment-seeds.js';
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedExercises();
    console.log('\n----- Exercises SEEDED -----\n');

    await seedUsers();
    console.log('\n----- User SEEDED -----\n');

    await seedEquipment();
    console.log('\n----- Equipment SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
