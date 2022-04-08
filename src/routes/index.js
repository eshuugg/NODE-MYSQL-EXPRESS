var express = require("express");
var EmployeeRouter = require("./employee.routes");

var api = express.Router();

api.use("/", EmployeeRouter);

module.exports = api;
