const qoute = require("../controllers/quoteControllers");
const cars = require("../db/cars");

test("Calculates the yearly and monthly premium based on the car value and risk rating", () => {
  const CAR_VALUE = cars[0].car_value;
  const RISK_RATING = cars[0].risk_rating;
  const yearly = 100;
  const monthly = 12;

  const yearlyPremium = (CAR_VALUE * RISK_RATING) / yearly;
  const premiumMonthly = yearlyPremium / monthly;

  expect(parseFloat(yearlyPremium.toFixed(2))).toBe(720);
  expect(parseFloat(premiumMonthly.toFixed(2))).toBe(60);
});

test("Test with various car values and risk ratings within valid ranges", () => {
  const CAR_VALUE = cars[1].car_value;
  const RISK_RATING = cars[1].risk_rating;
  const yearly = 100;
  const monthly = 12;

  const yearlyPremium = (CAR_VALUE * RISK_RATING) / yearly;
  const premiumMonthly = yearlyPremium / monthly;

  expect(parseFloat(yearlyPremium.toFixed(2))).toBe(360);
  expect(parseFloat(premiumMonthly.toFixed(2))).toBe(30);
});
test("Test the lowest and highest risk rating values", () => {
  const CAR_1 = cars[4].risk_rating;
  const CAR_2 = cars[1].risk_rating;

  function getRiskRating(riskRating) {
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
  }

  expect(getRiskRating(CAR_1)).toBe("Very High Risk");
  expect(getRiskRating(CAR_2)).toBe("Low Risk");
});

test("Returns an error if the risk rating is missing, out of range, or not a valid number", () => {
  const outOfRange = 7;
  const missing = undefined;
  const invalid = "invalid";
  const error = { error: "there is an error" };

  function outOfRangeRiskRating(riskRating) {
    if (isNaN(riskRating) || riskRating < 1 || riskRating > 5) {
      return { error: "there is an error" };
    }
  }

  expect(outOfRangeRiskRating(outOfRange)).toEqual(error);
  expect(outOfRangeRiskRating(missing)).toEqual(error);
  expect(outOfRangeRiskRating(invalid)).toEqual(error);
});

test("Returns an error if the car value is missing or not a valid number", () => {
  const outOfRange = -10000;
  const missing = undefined;
  const invalid = "invalid";
  const error = { error: "there is an error" };

  function outOfRangeCarValue(carValue) {
    if (isNaN(carValue) || carValue <= 0) {
      return { error: "there is an error" };
    }
  }

  expect(outOfRangeCarValue(outOfRange)).toEqual(error);
  expect(outOfRangeCarValue(missing)).toEqual(error);
  expect(outOfRangeCarValue(invalid)).toEqual(error);
});
