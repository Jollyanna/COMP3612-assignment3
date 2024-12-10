/*------------------------------------------------------------------------------------------------------------------------*
 * COMP 3612 - Assignment 3
 * F1 Race Data API
 * Javascript and Node  
 * ʚ Juliana Marie Tafalla ɞ
 * 
 * DATA-PROVIDER
 * This file is a module for reading/parsing JSON data and exporting them for other module(s) to use.
 * 
 * General Note(s):
 *  - The project uses a module, Express, for ease.  
 *  - The project is hosted on Glitch. 
 *      >   The Glitch URL that precedes the implemented API links is: https://meadow-ambitious-ziconium.glitch.me/  
 * 
 * Module Note(s):
 *  - While there appears to be a JSON file for the Qualifying data, it's excluded in this module as it contains
 *    nothing but the void.  
--------------------------------------------------------------------------------------------------------------------------*/

/* ʚɞ */

const fs = require("fs");
const path = require("path");

// CIRCUITS DATA
const jsonCircuitsPath      = getJsonPath(path, "circuits.json");
const jsonCircuitsData      = getJsonData(fs, jsonCircuitsPath);
const circuitsData          = getData(jsonCircuitsData);

// CONSTRUCTORS DATA
const jsonConstructorsPath  = getJsonPath(path, "constructors.json");
const jsonConstructorsData  = getJsonData(fs, jsonConstructorsPath);
const constructorsData      = getData(jsonConstructorsData);

// DRIVERS DATA
const jsonDriversPath       = getJsonPath(path, "drivers.json");
const jsonDriversData       = getJsonData(fs, jsonDriversPath);
const driversData           = getData(jsonDriversData);

// RACES DATA
const jsonRacesPath         = getJsonPath(path, "races.json");
const jsonRacesData         = getJsonData(fs, jsonRacesPath);
const racesData             = getData(jsonRacesData);

// RESULTS DATA
const jsonResultsPath       = getJsonPath(path, "results.json");
const jsonResultsData       = getJsonData(fs, jsonResultsPath);
const resultsData           = getData(jsonResultsData);

/* ʚɞ */

// EXPORT DATA
module.exports = {
    circuitsData,
    constructorsData,
    driversData,
    racesData,
    resultsData
};

/* ʚɞ */

// HELPER FUNCTION(S)
// getJsonPath() - returns the path of the json file
function getJsonPath(path, jsonFile) {
    return path.join(__dirname, "../data", jsonFile);
}

// getJsonData() - returns the json data read from the json file
function getJsonData(fs, jsonPath) {
    return fs.readFileSync(jsonPath, "utf-8");
}

// getData() - returns data parsed from the json data
function getData(jsonData) {
    return JSON.parse(jsonData); 
}


/* ʚɞ */