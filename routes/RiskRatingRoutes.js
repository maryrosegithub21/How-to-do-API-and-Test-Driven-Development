const express = require("express");
const riskRatingRouter = express.Router();
const riskRatingController = require("../controllers/RiskRatingControllers");

riskRatingRouter.post("/api/risk-rating", riskRatingController);

module.exports = riskRatingRouter;
