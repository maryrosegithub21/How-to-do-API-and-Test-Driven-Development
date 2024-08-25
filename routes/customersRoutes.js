// ========== Module IMPORTS ========== //
const express = require("express");
const customersRouter = express.Router();
const getcustomersController = require("../controllers/customersControllers.js");


customersRouter.post("/api/customers", getcustomersController.getcustomers);

module.exports = customersRouter;