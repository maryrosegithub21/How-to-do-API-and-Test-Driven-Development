const pool = require("../db/db");
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

module.exports = {
  getRiskRating: riskRatingResult,
  outOfRangeRiskRating: (riskRating) => {
    if (isNaN(riskRating) || riskRating < 1 || riskRating > 5) {
      return { error: "there is an error" };
    }
  },
  outOfRangeCarValue: (carValue) => {
    if (isNaN(carValue) || carValue <= 0) {
      return { error: "there is an error" };
    }
  },
  yearlyQuote: () => {
    return (CAR_VALUE * RISK_RATING) / YEARLY;
  },
  monthlyQuote: () => {
    const yearlyPremium = (CAR_VALUE * RISK_RATING) / YEARLY;
    return yearlyPremium / MONTHLY;
  },
  showFinal: () => {
    const yearlyPremium = module.exports.yearlyQuote();
    const monthlyPremium = module.exports.monthlyQuote();
    console.log(
      `${CAR_YEAR} ${CAR_MAKE} ${CAR_MODEL} is a ${riskRatingResult(RISK_RATING)} vehicle. Yearly premium: $${yearlyPremium} and Monthly premium: $${monthlyPremium}`
    );
  },
};

module.exports.showFinal();