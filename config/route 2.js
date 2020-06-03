const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const controllers = require('../app/controllers');
const service = require('../app/service');
const isTestFile = (file) => {
    return _.nth(file.split('.'), -2) === 'test';
};

module.exports = (app) => {
    console.log('Initializing routes.');

    fs.readdirSync(path.join(__dirname, '../app/controllers'))
        .filter(file => file.indexOf('.') !== 0 && file !== 'index.js' && !isTestFile(file) && file !== "logs")
        .forEach((file) => {
            console.log(`/${file.split('.')[0]}`);
            app.use(`/${file.split('.')[0]}`, controllers[file.split('.')[0]]);
        });

    console.log('\r');

    fs.readdirSync(path.join(__dirname, '../app/service'))
        .filter(file => file.indexOf('.') !== 0 && file !== 'index.js' && !isTestFile(file) && file !== "logs")
        .forEach((file) => {
            console.log(`/${file.split('.')[0]}`);
            app.use(`/api/${file.split('.')[0]}`, service[file.split('.')[0]]);
        });

    console.log('\r');
};
