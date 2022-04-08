module.exports = (sequelize,Sequelize)=>{
    const Organization = sequelize.define("organization",{
        emplist:{
            type: Sequelize.INTEGER
        },
        department:{
            type: Sequelize.STRING
        }
    });
    return Organization;
};