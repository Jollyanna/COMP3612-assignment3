/*------------------------------------------------------------------------------------------------------------------------*
 * COMP 3612 - Assignment 3
 * F1 Race Data API
 * Javascript and Node  
 * ʚ Juliana Marie Tafalla ɞ
 * 
 * F1-API-SERVER
 * This file holds the code for the project's server, listening for and handling incoming requests.
 * 
 * General Note(s):
 *  - The project uses a module, Express, for ease.  
 *  - The project is hosted on Glitch. 
 *      >   The Glitch URL that precedes the implemented API links is: https://meadow-ambitious-ziconium.glitch.me/     
--------------------------------------------------------------------------------------------------------------------------*/

/* ʚɞ */

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
});


/* ʚɞ */