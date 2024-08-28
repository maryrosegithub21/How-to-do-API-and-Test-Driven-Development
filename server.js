
// ========== Module IMPORTS ========== //
const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();
const riskRatingRouter = require("../routes/riskRatingRouter.js");

// Middleware
app.use(cors());
app.use(express.json());

// ========== ROUTE IMPORTS ========== //
const customersRouter = require("./routes/customersRoutes");
const quoteRouter = require("./routes/quoteRouters");

// Create API ENDPOINTS HERE!!!
// ROOT ENDPOINT
app.get("/api/customers", (req, res) => {
    res.send("The backend is functioning!");
});

// Risk Rating Endpoint
app.use(riskRatingRouter);

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
