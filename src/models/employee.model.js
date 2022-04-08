module.exports = (sequelize ,Sequelize) =>{
    const Employee = sequelize.define("employee",{
        name:{
            type: Sequelize.STRING
        },
        empcode:{
            type: Sequelize.INTEGER
        },
        salary:{
            type: Sequelize.INTEGER
        }

    });

    return Employee;
};