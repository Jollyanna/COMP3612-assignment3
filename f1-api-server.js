const express = require("express");
const app = express();

const router = require("./scripts/f1-api-router.js");
// CIRCUIT ROUTES
router.handleAllCircuits(app);
router.handleCircuitsById(app);

// CONSTRUCTOR ROUTES
router.handleAllConstructors(app);
router.handleConstructorsByRef(app);
router.handleConstructorResults(app);

// DRIVER ROUTES
router.handleAllDrivers(app);
router.handleDriversByRef(app);
router.handleDriverResults(app);

// RACE ROUTES
router.handleRacesbySeason(app);
router.handleRacesById(app);

// RESULT ROUTES
router.handleResultsById(app);
router.handleResultsBySeason(app);

let port = 8080;
app.listen(port, () => {
    console.log("\n[COMP 3612: ASSIGNMENT 3 - WELCOME TO THE F1 API SERVER!]\n");
    console.log("[SERVER INFORMATION]");
    console.log("   > Listening on port: %d", port);
    console.log("   > While the [SERVER] is active, users can view F1 Race data from the various APIs implemented");    
    console.log("   > To terminate the [SERVER], type CTRL-C on the Terminal\n");    
});

