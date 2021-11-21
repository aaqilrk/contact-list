require('dotenv').config()
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    dialect: process.env.SQL_DIALECT,
    define: {
        freezeTableName: true
    },
    "logging": false
});

module.exports = sequelize;