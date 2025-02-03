import { DataTypes, Model } from 'sequelize';
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
export class Equipment extends Model {
}
export function EquipmentFactory(sequelize) {
    Equipment.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        equipment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'equipment',
        modelName: 'equipment',
        underscored: true,
        timestamps: false,
        sequelize,
    });
    return Equipment;
}
