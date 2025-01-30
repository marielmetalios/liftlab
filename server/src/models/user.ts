import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface UserAttributes {
    user_id: number;
    isFavorite: boolean;
    workout_id: string;
    name: string;
    
}


interface UserCreationAttributes extends Optional<UserAttributes, 'user_id'> { }


export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public user_id!: number;
    public name!: string;
    public isFavorite!: boolean;
    public workout_id!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
            user_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,  
                primaryKey: true,     
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,     
            },
            isFavorite: {
                type: DataTypes.BOOLEAN,
                allowNull: true,      
                
            },
            workout_id: {
                type: DataTypes.INTEGER,
                allowNull: true,     
            },
        },
        {
            tableName: 'users',       
            sequelize,               
        }
    );

    return User;  
}
