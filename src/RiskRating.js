function calculateRiskRating(claimHistory) {
    // Check for invalid input
    if (typeof claimHistory !== 'string' || !claimHistory.trim()) {
        return { error: "there is an error" };
    }

    const keywords = ['collide', 'crash', 'scratch', 'bump', 'smash'];
    let keywordCount = 0;

    // Convert the claim history to lowercase for case-insensitive matching
    const lowerCaseHistory = claimHistory.toLowerCase();

    // Count occurrences of each keyword and their variations
    keywords.forEach(keyword => {
        // Use a regex to match keywords and their variations as substrings
        const regex = new RegExp(`\\b${keyword}\\w*\\b`, 'g');
        const matches = lowerCaseHistory.match(regex);
        if (matches) {
            keywordCount += matches.length;
        }
    });

    // Determine risk rating based on the number of keyword matches
    let risk_rating;
    if (keywordCount === 0) {
        risk_rating = 1;
    } else if (keywordCount === 1) {
        risk_rating = 2;
    } else if (keywordCount === 2) {
        risk_rating = 3;
    } else if (keywordCount === 3) {
        risk_rating = 4;
    } else {
        risk_rating = 5;
    }

    return { risk_rating };
}

module.exports = { calculateRiskRating };
