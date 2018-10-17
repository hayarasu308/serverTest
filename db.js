const Sequelize = require('sequelize')

const sequelize = new Sequelize('iwara', 'postgres', 'postgres', {
    host: '192.168.1.77',
    dialect: 'postgres',
})

const nameTable = sequelize.define('names', {
    name: {
        type: Sequelize.TEXT,
        primaryKey: true
    },
    age: {
        type: Sequelize.INTEGER
    }
}, {
        freezeTableName: true,
    timestamps: false
})

module.exports = nameTable