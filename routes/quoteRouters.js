const express = require("express");
const quoteRouter = express.Router();
const getQuoteControllers = require("../controllers/quoteControllers.js");

// Route to get risk rating
quoteRouter.get("/risk-rating/:riskRating", (req, res) => {
  const riskRating = parseInt(req.params.riskRating, 10);
  const result = quoteController.getRiskRating(riskRating);
  res.json({ riskRating: result });
});

// Route to check if risk rating is out of range
quoteRouter.get("/out-of-range-risk-rating/:riskRating", (req, res) => {
  const riskRating = parseInt(req.params.riskRating, 10);
  const result = quoteController.outOfRangeRiskRating(riskRating);
  res.json(result);
});

// Route to check if car value is out of range
quoteRouter.get("/out-of-range-car-value/:carValue", (req, res) => {
  const carValue = parseFloat(req.params.carValue);
  const result = quoteController.outOfRangeCarValue(carValue);
  res.json(result);
});

// Route to get yearly quote
quoteRouter.get("/yearly-quote", (req, res) => {
  const result = quoteController.yearlyQuote();
  res.json({ yearlyQuote: result });
});

// Route to get monthly quote
quoteRouter.get("/monthly-quote", (req, res) => {
  const result = quoteController.monthlyQuote();
  res.json({ monthlyQuote: result });
});

// Route to show final quote
quoteRouter.get("/show-final", (req, res) => {
  const result = quoteController.showFinal();
  res.json({ message: result });
});

module.exports = quoteRouter;
