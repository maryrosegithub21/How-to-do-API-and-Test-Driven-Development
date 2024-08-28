const cars = require("../db/cars");

const CAR_YEAR = cars[0].year;
const CAR_MAKE = cars[0].make;
const CAR_MODEL = cars[0].model;
const CAR_VALUE = cars[0].car_value;
const RISK_RATING = cars[0].risk_rating;
const YEARLY = 100;
const MONTHLY = 12;

const riskRatingResult = (riskRating) => {
  if (riskRating === 5) {
    return "Very High Risk";
  } else if (riskRating === 4) {
    return "High Risk";
  } else if (riskRating === 3) {
    return "Moderate Risk";
  } else if (riskRating === 2) {
    return "Low Risk";
  } else {
    return "Very Low Risk";
  }
};

const getRiskRating = (req, res) => {
  const riskRating = parseInt(req.params.riskRating, 10);
  const result = riskRatingResult(riskRating);
  res.json({ riskRating: result });
};

const outOfRangeRiskRating = (req, res) => {
  const riskRating = parseInt(req.params.riskRating, 10);
  if (isNaN(riskRating) || riskRating < 1 || riskRating > 5) {
    return res.json({ error: "there is an error" });
  }
  res.json({ riskRating });
};

const outOfRangeCarValue = (req, res) => {
  const carValue = parseFloat(req.params.carValue);
  if (isNaN(carValue) || carValue <= 0) {
    return res.json({ error: "there is an error" });
  }
  res.json({ carValue });
};

const yearlyQuote = (req, res) => {
  const result = (CAR_VALUE * RISK_RATING) / YEARLY;
  res.json({ yearlyQuote: result });
};

const monthlyQuote = (req, res) => {
  const yearlyPremium = (CAR_VALUE * RISK_RATING) / YEARLY;
  const result = yearlyPremium / MONTHLY;
  res.json({ monthlyQuote: result });
};

const showFinal = (req, res) => {
  const yearlyPremium = (CAR_VALUE * RISK_RATING) / YEARLY;
  const monthlyPremium = yearlyPremium / MONTHLY;
  const result = `${CAR_YEAR} ${CAR_MAKE} ${CAR_MODEL} is a ${riskRatingResult(RISK_RATING)} vehicle. Yearly premium: $${yearlyPremium} and Monthly premium: $${monthlyPremium}`;
  res.json({ message: result });
};

module.exports = {
  getRiskRating,
  outOfRangeRiskRating,
  outOfRangeCarValue,
  yearlyQuote,
  monthlyQuote,
  showFinal,
};