import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db';
import User from "./user.model";
import Item from "./item.model";

interface ReviewAttributes {
    id: number;
    userId: number;
    itemId: number;
    grade: number;
}

class Review extends Model<ReviewAttributes> implements ReviewAttributes {
    public id!: number;
    public userId!: number;
    public itemId!: number;
    public grade!: number;
}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id',
            },
        },
        itemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Item,
                key: 'id',
            },
        },
        grade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
    },
    {
        sequelize,
        modelName: 'review',
        tableName: 'reviews',
    }
);

// Define associations after model initialization
Review.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Review, { foreignKey: 'userId' });

export default Review;