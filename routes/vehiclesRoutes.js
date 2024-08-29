// ========== Module IMPORTS ========== //
const express = require("express");
const vehiclesRouter = express.Router();
const getvehiclesController = require("../controllers/vehiclesControllers.js");

vehiclesRouter.get("/car-value", getvehiclesController.getvehicles);

module.exports = vehiclesRouter;
