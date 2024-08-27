const pool = require("../db/db");

const getRiskRating = (riskRating) => {
  if (typeof riskRating !== "number" || riskRating < 1 || riskRating > 5) {
    return { error: "there is an error" };
  } else if (riskRating === 5) {
    return "very high risk";
  } else if (riskRating === 4) {
    return "high risk";
  } else if (riskRating === 3) {
    return "moderate risk";
  } else if (riskRating === 2) {
    return "low risk";
  } else {
    return "very low risk";
  }
};

const quote = (req, res) => {
  console.log("/quote endpoint is hit!");
  console.log(req.query);

  const CAR_YEAR = req.query.car_year;
  const CAR_MAKE = req.query.car_make;
  const CAR_MODEL = req.query.car_model;
  const CAR_VALUE = req.query.car_value;
  const RISK_RATING = req.query.risk_rating;
  const yearly = 100;
  const monthly = 12;

  if (isNaN(CAR_VALUE) || CAR_VALUE <= 0) {
    return res.status(400).json({ error: "Invalid car value" });
  }

  const riskRatingResult = getRiskRating(RISK_RATING);
  if (riskRatingResult.error) {
    return res.status(400).json(riskRatingResult);
  }

  const yearlyPremium = parseFloat(
    ((CAR_VALUE * RISK_RATING) / yearly).toFixed(2)
  );
  const monthlyPremium = parseFloat((yearlyPremium / monthly).toFixed(2));

  if (
    typeof CAR_VALUE === "number" &&
    !isNaN(CAR_VALUE) &&
    typeof RISK_RATING === "number" &&
    !isNaN(RISK_RATING)
  ) {
    console.log(
      `${CAR_YEAR} ${CAR_MAKE} ${CAR_MODEL} is in ${riskRatingResult} vehicle. Yearly premium: $${yearlyPremium} and Monthly premium: $${monthlyPremium}`
    );
  } else {
    console.log("Invalid input");
  }

  let query = `SELECT * FROM turnercars WHERE car_value = ? AND risk_rating = ?`;

  pool.execute(query, [CAR_VALUE, RISK_RATING], (err, result) => {
    if (err) {
      console.log("Database error:", err);
      return res.status(500).json({
        errorMessage:
          "An error occurred while fetching data from the database.",
      });
    }
    if (result.length === 0) {
      return res.sendStatus(401); // e.g., invalid credential
    }
    return res.status(200).json({
      result,
      yearlyPremium,
      monthlyPremium,
      riskRating: riskRatingResult,
    });
  });
};

module.exports = { quote };
