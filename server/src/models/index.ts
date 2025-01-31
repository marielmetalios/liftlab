import sequelize from '../config/connection.js';
import { EquipmentFactory } from './equipment.js';
import { ExerciseFactory } from './exercises.js';  
import { UserFactory } from './user.js';           


const Equipment = EquipmentFactory(sequelize);

const Exercises = ExerciseFactory(sequelize);

const User = UserFactory(sequelize);

// User.hasMany(Exercises);
Exercises.hasOne(Equipment);
// Equipment.belongsTo(Exercises);
User.belongsTo(Exercises)


export { Exercises, Equipment, User };
