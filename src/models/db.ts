import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('karolina', 'root', '123456', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
});
async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync({ force: true });
        console.log('Database schema synchronized.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { sequelize, initializeDatabase};
