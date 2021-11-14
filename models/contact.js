module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
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
    });
    return Contact;
};