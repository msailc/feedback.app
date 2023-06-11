import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db';
import Review from "./review.model";

const ItemType = {
    HOTEL: 'hotel',
    RESTAURANT: 'restaurant',
    CLUB: 'club',
    TOUR: 'tour',
};

interface ItemAttributes {
    id: number;
    name: string;
    address: string;
    type: string;
    rating: number;
    price: number;
    image: string;
    city: string;
    isRecommended: boolean;
    details: string;
    url: string;
    latitude: string;
    longitude: string;
}

class Item extends Model<ItemAttributes> implements ItemAttributes {
    public id!: number;
    public name!: string;
    public address!: string;
    public type!: string;
    public rating!: number;
    public price!: number;
    public image!: string;
    public city!: string;
    public isRecommended!: boolean;
    public details!: string;
    public url!: string;
    public latitude!: string;
    public longitude!: string;
}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM(...Object.values(ItemType)),
            allowNull: false,
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isRecommended: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'item',
        tableName: 'items',
    }
);

Item.hasMany(Review, { foreignKey: 'itemId' });

export default Item;
