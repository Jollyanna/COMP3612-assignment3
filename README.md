# COMP 3612 - F1 Race Data API Project

## Project Details
**_Welcome to the F1 Race Data API Repository!_**
<br>This repository holds the code for COMP 3612's Assignment 3 at Mount Royal University. Developed with Javascript and Node, this repository features a series of APIs based on Formula One Race data from 2019-2023, including data on circuits, constructors, drivers, races, and results. This project is hosted using Glitch and is developed by the one and only, Juliana Marie Tafalla.</br>    

## Main Project Files
- **scripts folder**
  - `data-provider.js` : a module that contains the data read from the various JSON files provided
  - `f1-race-router.js` : a module that contains the API routes
- `f1-race-server.js` : contains the server code to facilitate responses to user API requests

## API Routes
Below is a list of the following APIs implemented along with their sample usage:
- `/api/circuits` : returns details of all circuits from all seasons
- `/api/circuits/id` : returns details of a single circuit specified by a circuit id value (eg. /api/circuits/7)
- `/api/constructors` : returns details of all constructors from all seasons
- `/api/constructors/ref` : returns details of a single constructor specified by a constructor reference value (eg. /api/constructors/mclaren)
- `/api/constructorResults/ref/year` : returns details of a specified constructor's race results for the specified season (eg. /api/constructorResults/mclaren/2023)
- `/api/drivers` : returns details of all drivers from all seasons
- `/api/drivers/ref` : returns details of a single driver specified by a driver reference value (eg. /api/driverResults/piastri/2023)
- `/api/driverResults/ref/year` : returns details of a specified driver's race results for the specified season (eg. /api/driverResults/piastri/2023)
- `/api/races/season/year` : returns details of all races for the specified season (eg. /api/races/season/2023)
- `/api/races/id/id` : returns details of a race specified by a race id value (eg. /api/races/id/1100)
- `/api/results/race/id` : returns details of a specified race's results (eg. /api/results/race/1100)
- `/api/results/season/year` : returns details of the results for all races in the specified season (eg. /api/results/season/2023)
                  
## API Request Tests
Below is a list of links to test out the functionality of the implemented APIs:
- [/api/circuits](https://meadow-ambitious-ziconium.glitch.me/api/circuits) : valid link that returns all circuits
- [/api/circuits/1](https://meadow-ambitious-ziconium.glitch.me/api/circuits/1) : valid link that returns a circuit, Albert Park Grand Prix Circuit
- [/api/constructors](https://meadow-ambitious-ziconium.glitch.me/api/constructors) : valid link that returns all constructors
- [/api/constructors/mclaren](https://meadow-ambitious-ziconium.glitch.me/api/constructors/mclaren) : valid link that returns a constructor, McLaren
- [/api/coNSTruCTors/mclaren](https://meadow-ambitious-ziconium.glitch.me/api/coNSTruCTors/mclaren) : valid link that returns a constructor, McLaren (case insensitive)
- [/api/constructors/javascript](https://meadow-ambitious-ziconium.glitch.me/api/constructors/javascript
) : invalid link (invalid constructor reference value: javascript)
- [/api/constructorResults/mclaren/2023](https://meadow-ambitious-ziconium.glitch.me/api/constructorResults/mclaren/2023) : valid link that returns the results for the constructor McLaren in season 2023
- [/api/constructorResults/MERCEDES/2020](https://meadow-ambitious-ziconium.glitch.me/api/constructorResults/MERCEDES/2020) : valid link that returns the results for the constructor Mercedes in season 2020 (case insensitive)
- [/api/constructorResults/mclaren/2040](https://meadow-ambitious-ziconium.glitch.me/api/constructorResults/mclaren/2040) : invalid link (invalid season value: 2040)
- [/api/constructorResults/comp3612/2023](https://meadow-ambitious-ziconium.glitch.me/api/constructorResults/comp3612/2023) : invalid link (invalid constructor reference value: comp3612)
- [/api/drivers](https://meadow-ambitious-ziconium.glitch.me/api/drivers) : valid link that returns all drivers
- [/api/drivers/hamilton](https://meadow-ambitious-ziconium.glitch.me/api/drivers/hamilton) : valid link that returns a driver, Hamilton
- [/api/drivers/HAMilton](https://meadow-ambitious-ziconium.glitch.me/api/drivers/HAMilton) : valid link that returns a driver, Hamilton (case insensitive)
- [/api/drivers/randy](https://meadow-ambitious-ziconium.glitch.me/api/drivers/randy) : invalid link (invalid driver reference value: randy)
- [/api/driverResults/piastri/2023](https://meadow-ambitious-ziconium.glitch.me/api/driverResults/piastri/2023) : valid link that returns the results for the driver Piastri in season 2023
  
