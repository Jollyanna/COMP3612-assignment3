
/*------------------------------------------------------------------------------------------------------------------------*
 * COMP 3612 - Assignment 3
 * F1 Race Data API
 * Javascript and Node  
 * ʚ Juliana Marie Tafalla ɞ
 * 
 * F1-API-ROUTER
 * This file is a module for the routes implemented, allowing the server to respond to API requests.
 * 
 * General Note(s):
 *  - The project uses a module, Express, for ease.  
 *  - The project is hosted on Glitch. 
 *      >   The Glitch URL that precedes the implemented API links is: https://meadow-ambitious-ziconium.glitch.me/  
 *  
 * Module Note(s):
 *  - The functions are structured and grouped together based on the data the functions are reading from, 
 *    as formatted below:
 *      > data
 *          // ...
 *      > helper function(s)
 *          // jsonMessage()       
 *      > CIRCUIT APIs
 *          // handleAllCircuits() ; handleCircuitsById()
 *      > CONSTRUCTOR APIs
 *          // handleAllConstructors() ; handleConstructorsByRef() ; handleConstructorResults()
 *      > DRIVER APIs 
 *          // handleAllDrivers() ; handleDriversByRef() ; handleDriverResults()
 *      > RACE APIs
 *          // handleRacesbySeason() ; handleRacesById()
 *      > RESULT APIs 
 *          // handleResultsById() ; handleResultsBySeason()
 *      > export routes
 *          // ...   
--------------------------------------------------------------------------------------------------------------------------*/

/* ʚɞ */

// DATA
const allData         = require("./data-provider.js");
const allCircuits     = allData.circuitsData;
const allConstructors = allData.constructorsData;
const allDrivers      = allData.driversData;
const allRaces        = allData.racesData;
const allResults      = allData.resultsData;

// HELPER FUNCTION(S)
// jsonMessage() - displays messages in json format
const jsonMessage = (msg) => {
    return { MESSAGE : msg };
}

// CIRCUIT APIs
// handleAllCircuits() - returns all circuits
const handleAllCircuits = (app) => {
    app.get("/api/circuits", (req, resp) => { resp.json(allCircuits) });
};

// handleCircuitsById() - returns single circuit specified by the passed circuitId value
const handleCircuitsById = (app) => {
    app.get("/api/circuits/:id", (req, resp) => {
        const circuitIdToFind = req.params.id;
        const targetCircuit = 
            allCircuits.find(circuit => circuit.circuitId == circuitIdToFind);
        
        if (targetCircuit != undefined) {
            resp.json(targetCircuit);
        }
        else {
            resp.json(jsonMessage(`CIRCUIT WITH ID [${circuitIdToFind}] NOT FOUND!`));
        }
    });
}

// CONSTRUCTOR APIs
// handleAllConstructors() - returns all constructors
const handleAllConstructors = (app) => {
    app.get("/api/constructors", (req, resp) => { resp.json(allConstructors) });
};

// handleConstructorsByRef() - returns single constructor specified by the passed constructorRef value
const handleConstructorsByRef = (app) => {
    app.get("/api/constructors/:ref", (req, resp) => {
        const constructorToFind = req.params.ref.toLowerCase();
        const targetConstructor =
            allConstructors.find(constructor => constructor.constructorRef == constructorToFind);
        
        if (targetConstructor != undefined) {
            resp.json(targetConstructor);
        }
        else {
            resp.json(jsonMessage(`CONSTRUCTOR [${constructorToFind}] NOT FOUND!`));
        }
    });
};

// handleConstructorResults() - returns the race results for a specified constructor (constructorRef value) and season
const handleConstructorResults = (app) => {
    app.get("/api/constructorResults/:ref/:year", (req, resp) => {
        const constructorToFind = req.params.ref.toLowerCase();
        const seasonToFind = req.params.year;
        const targetConstructorResults = 
            allResults.filter(results => 
                results.constructor.ref == constructorToFind && results.race.year == seasonToFind
            );
        
        if (targetConstructorResults.length > 0) {
            resp.json(targetConstructorResults);
        }
        else {
            resp.json(jsonMessage(`RACE RESULTS FOR CONSTRUCTOR [${constructorToFind}] IN SEASON [${seasonToFind}] NOT FOUND!`));
        }
    });
};

// DRIVER APIs
// handleAllDrivers() - returns all drivers
const handleAllDrivers = (app) => {
    app.get("/api/drivers", (req, resp) => { resp.json(allDrivers) });
};

// handleDriversByRef() - returns single driver specified by the passed driverRef value
const handleDriversByRef = (app) => {
    app.get("/api/drivers/:ref", (req, resp) => { 
        const driverToFind = req.params.ref.toLowerCase();
        const targetDriver = 
            allDrivers.find(driver => driver.driverRef == driverToFind);
        
        if (targetDriver != undefined) {
            resp.json(targetDriver);
        }
        else {
            resp.json(jsonMessage(`DRIVER [${driverToFind}] NOT FOUND!`));
        }
    });
};

// handleDriverResults() - returns the race results for a specified driver (driverRef value) and season
const handleDriverResults = (app) => {
    app.get("/api/driverResults/:ref/:year", (req, resp) => {
        const driverToFind = req.params.ref.toLowerCase();
        const seasonToFind = req.params.year;
        const targetDriverResults = 
            allResults.filter(results => 
                results.driver.ref == driverToFind && results.race.year == seasonToFind
            );
        
        if (targetDriverResults.length > 0) {
            resp.json(targetDriverResults);
        }
        else {
            resp.json(jsonMessage(`RACE RESULTS FOR DRIVER [${driverToFind}] IN SEASON [${seasonToFind}] NOT FOUND!`));
        }
    });
};

// RACE APIs
// handleRacesbySeason() - returns all the races for the specified season
const handleRacesbySeason = (app) => {
    app.get("/api/races/season/:year", (req, resp) => {
        const seasonToFind = req.params.year;
        const targetRaces = 
            allRaces.filter(race => race.year == seasonToFind);
        
        if (targetRaces.length > 0) {
            resp.json(targetRaces);
        }
        else {
            resp.json(jsonMessage(`RACES IN SEASON [${seasonToFind}] NOT FOUND!`));
        }
    });
}

// handleRacesById() - returns just the specified race (raceId value)
const handleRacesById = (app) => {
    app.get("/api/races/id/:id", (req, resp) => {
        const raceIdToFind = req.params.id;
        const targetRace =
            allRaces.find(race => race.id == raceIdToFind);
        
        if (targetRace != undefined) {
            resp.json(targetRace);
        }
        else {
            resp.json(jsonMessage(`RACE WITH ID [${raceIdToFind}] NOT FOUND!`));
        }
    });
}

// RESULT APIs
// handleResultsById() - returns all the results for the specified race (raceId value)
const handleResultsById = (app) => {
    app.get("/api/results/race/:id", (req, resp) => {
        const raceIdToFind = req.params.id;
        const targetResults = 
            allResults.filter(result => result.race.id == raceIdToFind);

        if (targetResults.length > 0) {
            resp.json(targetResults);
        }
        else {
            resp.json(jsonMessage(`RESULTS FOR RACE ID [${raceIdToFind}] NOT FOUND!`));
        }
    });
}

// handleResultsBySeason() - returns all the results for all the races in the season
const handleResultsBySeason = (app) => {
    app.get("/api/results/season/:year", (req, resp) => {
        const seasonToFind = req.params.year;
        const targetResults =
            allResults.filter(result => result.race.year == seasonToFind);
        
        if (targetResults.length > 0) {
           resp.json(targetResults);
        }
        else {
            resp.json(jsonMessage(`RESULTS FOR ALL RACES IN SEASON [${seasonToFind}] NOT FOUND!`));
        }
    });
}

/* ʚɞ */

// EXPORT ROUTES
module.exports = {
    // CIRCUIT APIs
    handleAllCircuits,
    handleCircuitsById,

    // CONSTRUCTOR APIs
    handleAllConstructors,
    handleConstructorsByRef,
    handleConstructorResults,

    // DRIVER APIs
    handleAllDrivers,
    handleDriversByRef,
    handleDriverResults,

    // RACE APIs
    handleRacesbySeason,
    handleRacesById,

    // RESULT APIs
    handleResultsById,
    handleResultsBySeason
};


