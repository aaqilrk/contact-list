const {
    DataTypes,
} = require('sequelize');
const sequelize = require('../config/sequelize');

const Contact = sequelize.define('contact', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true  
        }
    },
    phoneNo: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notEmpty: true  
        }
    }
}, {
    timestamps: false
});

module.exports = Contact;