import { DataTypes, Model } from 'sequelize';
// interface ExerciseAttributes {
//     id: number;
//     muscleGroup: string;
//     name: string;
//     reps_sets: string;
// }
// interface ExerciseCreationAttributes extends Optional<ExerciseAttributes, 'id'> { }
// export class Exercises extends Model<ExerciseAttributes, ExerciseCreationAttributes> implements ExerciseAttributes {
//     public id!: number;
//     public muscleGroup!: string;
//     public name!: string;
//     public reps_sets!: string;
// }
export class Exercises extends Model {
}
export function ExerciseFactory(sequelize) {
    Exercises.init({
        id: {
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
        repSets: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        modelName: 'exercises',
        tableName: 'exercises',
        sequelize,
        underscored: true,
        timestamps: false,
    });
    return Exercises;
}
