const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define(
    'user',
    {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
            // allowNull defaults to true
        },
        password: {
            type: Sequelize.STRING
            // allowNull defaults to true
        },
        email: {
            type: Sequelize.STRING
            // allowNull defaults to true
        }
}, {
    timestamps: false,
    tableName: 'user',
});


module.exports = User;