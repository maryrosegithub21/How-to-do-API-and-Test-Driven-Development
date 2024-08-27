function calculateYearlyPremium(carValue, riskRating) {
    // Yearly premium calculation
    const premium = (carValue * riskRating) / 100;

    // // Error handling
    // if(typeof carValue !== "number" || typeof riskRating !== "number") {
    //     return { error: "Car value and risk rating are required" };
    // }

}
module.exports = { calculateYearlyPremium }