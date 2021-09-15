const Sequelize = require('sequelize');
const db = new Sequelize('biodata', 'postgres', 'password', {
    dialect: 'postgres',
    host: 'localhost'
});

module.exports = db;