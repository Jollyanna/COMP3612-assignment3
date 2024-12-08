const fs = require("fs");
const path = require("path");

// CIRCUITS DATA
const jsonCircuitsPath = getJsonPath(path, "circuits.json");
const jsonCircuitsData = getJsonData(fs, jsonCircuitsPath);
const circuitsData     = getData(jsonCircuitsData);

// CONSTRUCTORS DATA
const jsonConstructorsPath = getJsonPath(path, "constructors.json");
const jsonConstructorsData = getJsonData(fs, jsonConstructorsPath);
const constructorsData     = getData(jsonConstructorsData);

// DRIVERS DATA
const jsonDriversPath = getJsonPath(path, "drivers.json");
const jsonDriversData = getJsonData(fs, jsonDriversPath);
const driversData     = getData(jsonDriversData);

// RACES DATA
const jsonRacesPath = getJsonPath(path, "races.json");
const jsonRacesData = getJsonData(fs, jsonRacesPath);
const racesData     = getData(jsonRacesData);

// RESULTS DATA
const jsonResultsPath = getJsonPath(path, "results.json");
const jsonResultsData = getJsonData(fs, jsonResultsPath);
const resultsData     = getData(jsonResultsData);

/* ʚɞ */

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


