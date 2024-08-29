const express = require("express");
const riskRatingRouter = express.Router();
const riskRatingController = require("../controllers/riskRatingControllers");

riskRatingRouter.post("/risk-rating", riskRatingController.calculateRiskRating);
riskRatingRouter.post(
  "/claim-history",
  riskRatingController.riskRatingController
);

module.exports = riskRatingRouter;
