import { DataTypes, Sequelize, Model, Optional } from 'sequelize';


interface EquipmentAttributes {
    equipment_id: number;
    location: string;
    Equipment: string;
    
}


interface EquipmentCreationAttributes extends Optional<EquipmentAttributes, 'equipment_id'> { }


export class Equipment extends Model<EquipmentAttributes, EquipmentCreationAttributes> implements EquipmentAttributes {
    public equipment_id!: number;
    public location!: string;
    public Equipment!: string;


    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


export function EquipmentFactory(sequelize: Sequelize): typeof Equipment {
    Equipment.init(
        {
            equipment_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,  
                primaryKey: true,     
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,  
            },
            Equipment: {
                type: DataTypes.STRING,
                allowNull: true,      
                
            },
          
        },
        {
            tableName: 'equipment',  
            sequelize,              
        }
    );

    return Equipment;  
}
