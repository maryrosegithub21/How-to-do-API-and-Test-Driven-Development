const qoute = require("../controllers/quoteControllers");
const cars = require("../db/cars");

test("Test the lowest and highest risk rating values", () => {
  const CAR_1 = cars[4].risk_rating;
  const CAR_2 = cars[1].risk_rating;

  expect(qoute.getRiskRating(CAR_1)).toBe("Very High Risk");
  expect(qoute.getRiskRating(CAR_2)).toBe("Low Risk");
});

test("Returns an error if the risk rating is missing, out of range, or not a valid number", () => {
  const outOfRange = 7;
  const missing = undefined;
  const invalid = "invalid";
  const error = { error: "there is an error" };

  expect(qoute.outOfRangeRiskRating(outOfRange)).toEqual(error);
  expect(qoute.outOfRangeRiskRating(missing)).toEqual(error);
  expect(qoute.outOfRangeRiskRating(invalid)).toEqual(error);
});

test("Returns an error if the car value is missing or not a valid number", () => {
  const outOfRange = -10000;
  const missing = undefined;
  const invalid = "invalid";
  const error = { error: "there is an error" };

  expect(qoute.outOfRangeCarValue(outOfRange)).toEqual(error);
  expect(qoute.outOfRangeCarValue(missing)).toEqual(error);
  expect(qoute.outOfRangeCarValue(invalid)).toEqual(error);
});

test("Calculates the yearly and monthly premium based on the car value and risk rating", () => {
  const CAR_VALUE = cars[0].car_value;
  const RISK_RATING = cars[0].risk_rating;
  const YEARLY = 100;
  const MONTHLY = 12;

  const yearlyPremium = (CAR_VALUE * RISK_RATING) / YEARLY;
  const monthlyPremium = yearlyPremium / MONTHLY;

  expect(qoute.yearlyQuote()).toBe(yearlyPremium);
  expect(qoute.monthlyQuote()).toBe(monthlyPremium);
});

test("Return console.log the final output", () => {
  const CAR_YEAR = cars[0].year;
  const CAR_MAKE = cars[0].make;
  const CAR_MODEL = cars[0].model;
  const CAR_VALUE = cars[0].car_value;
  const RISK_RATING = cars[0].risk_rating;
  const riskRatingResult = qoute.getRiskRating(RISK_RATING);
  const yearlyQuote = qoute.yearlyQuote();
  const monthlyQuote = qoute.monthlyQuote();

  const expectedOutput = `${CAR_YEAR} ${CAR_MAKE} ${CAR_MODEL} is a ${riskRatingResult} vehicle. Yearly premium: $${yearlyQuote} and Monthly premium: $${monthlyQuote}`;
  console.log = jest.fn();

  qoute.showFinal();

  expect(console.log).toHaveBeenCalledWith(expectedOutput);
});