
// ========== Module IMPORTS ========== //
const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config();


// Middleware
app.use(cors());
app.use(express.json());

// ========== ROUTE IMPORTS ========== //
const customersRouter = require("./routes/customersRoutes");
const vehiclesRouter = require("./routes/vehiclesRoutes");
const riskRatingRouter = require("../routes/riskRatingRouter.js");
const quoteRouter = require("./routes/quoteRouters");

// Create API ENDPOINTS HERE!!!
// ROOT ENDPOINT
app.get("/", (req, res) => {
    res.send("The backend is functioning!");
  });

app.use(vehiclesRouter); 

// Car Value Endpoint
app.use(customersRouter);

// Risk Rating Endpoint
app.use(riskRatingRouter);

// Insurance Quote Endpoint
app.use('/api/quotes', quoteRouter);

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
