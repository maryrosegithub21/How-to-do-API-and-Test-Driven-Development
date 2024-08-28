const express = require('express');
const quoteRouter = express.Router();
const quoteController = require('../controllers/quoteControllers');

// Route to get risk rating
quoteRouter.get('/risk-rating/:riskRating', quoteController.getRiskRating);

// Route to check if risk rating is out of range
quoteRouter.get('/out-of-range-risk-rating/:riskRating', quoteController.outOfRangeRiskRating);

// Route to check if car value is out of range
quoteRouter.get('/out-of-range-car-value/:carValue', quoteController.outOfRangeCarValue);

// Route to get yearly quote
quoteRouter.get('/yearly-quote', quoteController.yearlyQuote);

// Route to get monthly quote
quoteRouter.get('/monthly-quote', quoteController.monthlyQuote);

// Route to show final quote
quoteRouter.get('/show-final', quoteController.showFinal);

module.exports = quoteRouter;