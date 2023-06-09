import { DataTypes, Model } from 'sequelize';
import { sequelize } from './db';

// this is where we define the model attributes
interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
}

// this class is used to create instances of the user model,'!' means that the value can be null and assigned later
class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public username!: string;
    public email!: string;
    public password!: string;
}

// this is where we define the model and create it in database
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'user',
        tableName: 'users',
    }
);

export default User;

