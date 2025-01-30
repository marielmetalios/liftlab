import sequelize from '../config/connection.js';
import { EquipmentFactory } from './Equipment.js';
import { ExerciseFactory } from './exercises.js';  
import { UserFactory } from './user.js';           


const Equipment = EquipmentFactory(sequelize);

const Exercises = ExerciseFactory(sequelize);

const User = UserFactory(sequelize);


export { Exercises, Equipment, User };
