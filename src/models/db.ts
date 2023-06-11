import { Sequelize } from 'sequelize';
import * as fs from "fs";
import Item from "./item.model";
import path from "path";

// initialize database connection, 1st param is database name, 2nd is username, 3rd is password
const sequelize = new Sequelize('karolina', 'root', '123456', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
});

async function initializeDatabase() { // initialize database before starting the server
    try {
        await sequelize.authenticate(); // check connection
        console.log('Connection has been established successfully.');

        await sequelize.sync({ force: true }); // create tables if they don't exist, set true to drop tables first
        console.log('Database schema synchronized.');

        await seedDatabase(); // seed the database with initial data
        console.log('Database seeded with initial data.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function seedDatabase() {
    try {
        const itemsDataPath = path.join(__dirname, '..', '..', 'src', 'models', 'items.json');
        const itemsData = fs.readFileSync(itemsDataPath, 'utf-8');
        const items = JSON.parse(itemsData);

        // Insert the items into the database
        // Replace Item with your Sequelize model name
        await Item.bulkCreate(items);
    } catch (error) {
        console.error('Unable to seed the database:', error);
    }
}


export { sequelize, initializeDatabase };
