const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  'besthelper',
  'besthelper',
  'P@ssw0rd',
  {
    host: '192.168.99.100',
    dialect: 'postgres'
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.biodata = require("./Biodata")(sequelize, Sequelize);

module.exports = db;