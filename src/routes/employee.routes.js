//import controller employee, organization
var controller = require('../controller/employeeControllers');
const  orgcontroller = require('../controller/organizationController')

//router
const router = require('express').Router()


// use router
router.post('/employee', controller.create);

router.get("/employee", controller.findAll);

router.get("/employee/:id", controller.findOne);

router.put("/employee/:id", controller.update);

router.delete("/employee/:id", controller.delete);

//  organization router 

router.post('/addOrganization',orgcontroller.addOrganization);

router.get('/allOrganizationData',orgcontroller.getAllOrganizationData);

//get all employee in the organization 

router.get('/getOrganizationData/:id',orgcontroller.getOrganizationData)

router.put("/getOrganizationData/:id", orgcontroller.updateOrganization);


module.exports = router;
