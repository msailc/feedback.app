import { Sequelize } from 'sequelize';

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

        await sequelize.sync({ force: false }); // create tables if they don't exist, set true to drop tables first
        console.log('Database schema synchronized.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { sequelize, initializeDatabase };
