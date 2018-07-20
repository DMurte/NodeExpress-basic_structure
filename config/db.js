require('dotenv').config()
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const connection = new Sequelize('', '', '', {  
    dialect: '',
    host: '',
    operatorsAliases: Op
});

module.exports = connection;

