import { DataTypes, Sequelize, InferAttributes, InferCreationAttributes, Model, CreationOptional, ForeignKey } from 'sequelize';
import { Exercises } from './exercises';


// interface EquipmentAttributes {
//     id: number;
//     equipment: string;
//     exercise_id: number;
    
// }


// interface EquipmentCreationAttributes extends Optional<EquipmentAttributes, 'id'> { }


// export class Equipment extends Model<EquipmentAttributes, EquipmentCreationAttributes> implements EquipmentAttributes {
//     public id!: number;
//     public equipment!: string;
//     public exercise_id!: ForeignKey<Exercises[`id`]>;

    
// }

export class Equipment extends Model<InferAttributes<Equipment>, InferCreationAttributes<Equipment>> {
    declare id: CreationOptional<number>;
    declare exercise_id: ForeignKey<Exercises['id']>; 
    declare equipment: string;
}


export function EquipmentFactory(sequelize: Sequelize): typeof Equipment {
    Equipment.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,  
                primaryKey: true,     
            },
            equipment: {
                type: DataTypes.STRING,
                allowNull: true,      
            },
            
        },
        {
            tableName: 'equipment',  
            modelName: 'equipment',
            underscored: true,
            timestamps: false,
            sequelize,              
        }
    );

    return Equipment;  
}
