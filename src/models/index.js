const dbConfig = require("../config/dbConfig");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,


    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.organization = require("./organization.model")(sequelize, Sequelize);
db.employee = require("./employee.model.js")(sequelize, Sequelize);


//1 to many relation

db.organization.hasMany(db.employee,{
    foreignKey: 'organization_id',
    as: 'employee'
})

db.employee.belongsTo(db.organization,{
    foreignKey: 'organization_id',
    as: 'organization'
})


module.exports = db;


