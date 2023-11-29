const Sequelize = require("sequelize");
const { destinationsModel } = require('../models/destinations.model');
const { contactModel } = require('../models/contact.model');

const sequelize = new Sequelize('bandung_be', 'root', '', {
  // host: 'localhost',
  host: '127.0.0.1',
  dialect: "mysql",
  port: '3306',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};
db.sequelize = sequelize;
db.destinations = destinationsModel(sequelize);
// db.contact = contactModel(sequelize);


module.exports = db;
