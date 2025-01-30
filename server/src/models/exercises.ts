import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface ExerciseAttributes {
    workout_id: number;
    muscleGroup: string;
    name: string;
    reps_sets: string;
    user_id: number;
    equipment_id: number;
}


interface ExerciseCreationAttributes extends Optional<ExerciseAttributes, 'workout_id'> { }


export class Exercises extends Model<ExerciseAttributes, ExerciseCreationAttributes> implements ExerciseAttributes {
    public workout_id!: number;
    public muscleGroup!: string;
    public name!: string;
    public reps_sets!: string;
    public user_id!: number;
    public equipment_id!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


export function ExerciseFactory(sequelize: Sequelize): typeof Exercises {
    Exercises.init(
        {
            workout_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,  
                primaryKey: true,     
            },
            muscleGroup: {
                type: DataTypes.STRING,
                allowNull: false,    
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,      
              
            },
            reps_sets: {
                type: DataTypes.TEXT,
                allowNull: false,     
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: true,     
            },
            equipment_id: {
                type: DataTypes.INTEGER,
                allowNull: true,     
            },

        },
        {
            tableName: 'exercises',  
            sequelize,               
        }
    );

    return Exercises;  
}
