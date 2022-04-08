const db = require('../models')

//model
const Organization = db.organization;
const Employee = db.employee;
//function

//Add organization

const addOrganization = async (req,res) =>{

    let data =  {
        emplist: req.body.emplist,
        department: req.body.department
    }

    const organization = await Organization.create(data)
    res.status(200).send(organization)
}

//Get all data

const getAllOrganizationData = async (req,res) =>{

    const organization = await Organization.findAll();
    res.status(200).send(organization)
}

//Update all data
const updateOrganization = async (req,res) =>{

    const id = req.params.id
    const organization = await Organization.update(req.body,{where:{ id:id }})
    res.status(200).send(organization)
}


//Connect one to many relation  Organization and employee

const getOrganizationData = async (req,res) => {
    
    const {id} = req.params
   const data = await Organization.findAll({
    include: [{
        model: Employee,
        as: 'employee'
    }],
    where: {id: id}
   })
   res.status(200).send(data)
}


module.exports = {
    addOrganization,
    getAllOrganizationData,
    getOrganizationData,
    updateOrganization
}