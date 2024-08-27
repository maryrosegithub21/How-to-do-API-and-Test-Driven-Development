console.log('hello world');


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

// Create API ENDPOINTS HERE!!!
// ROOT ENDPOINT
app.get("/", (req, res) => {
    res.send("The backend is functioning!");
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
  .listen(PORT, console.log(`It's working at http://localhost:${PORT}`))
  .on("error", (err) => {
    console.log(err);
  });
