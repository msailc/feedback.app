import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db';

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
    cost: string;
    isRecommended: boolean;
    details: string;
    url: string;
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
    public cost!: string;
    public isRecommended!: boolean;
    public details!: string;
    public url!: string;
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
        cost: {
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
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'item',
        tableName: 'items',
    }
);

export default Item;
