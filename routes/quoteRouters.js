const express = require("express");
const quoteRouter = express.Router();
const quoteController = require("../controllers/quoteControllers");

// Route to get Quote endpoint
quoteRouter.get("/", quoteController.getQuoteApiHandle);
quoteRouter.get("/checklist", quoteController.getChecklist);
quoteRouter.get("/description", quoteController.getRiskDescription);
quoteRouter.get("/yearly", quoteController.getYearlyPremium);
quoteRouter.get("/monthly", quoteController.getMonthlyPremium);

module.exports = quoteRouter;
