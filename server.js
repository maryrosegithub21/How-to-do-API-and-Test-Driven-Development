console.log('hello world');

// ========== Module IMPORTS ========== //
const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();
const { calculateRiskRating } = require('./src/RiskRating');

// Middleware
app.use(cors());
app.use(express.json());

// ========== ROUTE IMPORTS ========== //
const customersRouter = require("./routes/customersRoutes");

// Create API ENDPOINTS HERE!!!

// ROOT ENDPOINT
app.get("/", (req, res) => {
app.get("/api/customers", (req, res) => {
    res.send("The backend is functioning!");
});

// Risk Rating Endpoint
app.post('/api/calculate-risk', (req, res) => {
    try {
        const { claim_history } = req.body;

        if (typeof claim_history !== 'string') {
            return res.status(400).json({ error: "Invalid input: claim_history must be a string." });
        }

        const result = calculateRiskRating(claim_history);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.use(customersRouter);

// ========== ROUTE IMPORTS ========== //
const vehiclesRouter = require("./routes/vehiclesRoutes");

// Create API ENDPOINTS HERE!!!
// ROOT ENDPOINT
app.get("/", (req, res) => {
    res.send("The backend is functioning!");
  });

  app.use(vehiclesRouter); 

// Port
const PORT = process.env.PORT || 4000 ;
app
  .listen(PORT, () => console.log(`It's working at http://localhost:${PORT}`))
  .on("error", (err) => {
    console.log(err);
  });

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
