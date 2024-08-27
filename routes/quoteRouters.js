const express = require("express");
const quoteRouter = express.Router();
const getQuoteControllers = require("../controllers/quoteControllers.js");

quoteRouter.get("/api/quote", getQuoteControllers.getQuote);

module.exports = quoteRouter;
