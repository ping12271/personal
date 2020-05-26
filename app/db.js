const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports =  new Sequelize('mern', 'root', '1234', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
