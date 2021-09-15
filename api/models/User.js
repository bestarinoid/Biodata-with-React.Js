module.exports = (sequelize, DataTypes) => {
const Sequelize = require('sequelize');
const db = require('./biodata');

const table = db.define('dataUser',
{
    nama: Sequelize.STRING,
    age: Sequelize.INTEGER,
    birthdate: Sequelize.STRING,
    birthplace: Sequelize.STRING,
    major: Sequelize.STRING,
    email: Sequelize.STRING
},{
    freezeTableName: true,
    timestamps: false
});

return dataUser;
};

module.exports = User;