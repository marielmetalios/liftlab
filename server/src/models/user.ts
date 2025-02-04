import { DataTypes, Sequelize, InferAttributes, InferCreationAttributes, Model, CreationOptional, ForeignKey } from 'sequelize';
import { Exercises } from './exercises';


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

// export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>>{
//     declare id: CreationOptional<number>;
//     declare exercise_id: ForeignKey<Exercises['id']>;
//     declare isFavorite: boolean;
//     declare username: string;
// }

// export function UserFactory(sequelize: Sequelize): typeof User {
//     User.init(
//         {
//             id: {
//                 type: DataTypes.INTEGER,
//                 autoIncrement: true,  
//                 primaryKey: true,     
//             },
//             isFavorite: {
//                 type: DataTypes.BOOLEAN,
//                 allowNull: true,      
                
//             },
//             username: {
//                 type: DataTypes.STRING,
//                 allowNull: false,     
//             }
//         },
//         {
//             tableName: 'users',   
//             modelName: 'users',
//             underscored: true,
//             timestamps: false,    
//             sequelize,               
//         }
//     );

//     return User;  
// }

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare exercise_id: ForeignKey<Exercises['id']> | null; // Ensure this matches your exercise model
    declare isFavorite: boolean;
    declare username: string;
}

export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,  
                primaryKey: true,     
            },
            exercise_id: {
                type: DataTypes.INTEGER,  
                references: {
                    model: 'exercises',  
                    key: 'id',            
                },
                allowNull: false,  
            },
            isFavorite: {
                type: DataTypes.BOOLEAN,
                allowNull: true,      
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,     
            }
        },
        {
            tableName: 'users',   
            modelName: 'users',
            underscored: true,
            timestamps: false,    
            sequelize,               
        }
    );

    return User;  
}
