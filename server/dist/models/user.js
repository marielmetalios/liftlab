import { DataTypes, Model } from 'sequelize';
// interface UserAttributes {
//     id: number;
//     isFavorite: boolean;
//     exercise_id: number;
//     username: string;
// }
// interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }
// export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
//     public id!: number;
//     public isFavorite!: boolean;
//     public exercise_id!: ForeignKey<Exercises[`id`]>;
//     public username!: string;
// }
export class User extends Model {
}
export function UserFactory(sequelize) {
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        isFavorite: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'users',
        modelName: 'users',
        underscored: true,
        timestamps: false,
        sequelize,
    });
    return User;
}
