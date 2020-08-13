const express = require('express'); 
const path = require('path'); 
const weatherRouter = express.Router(); 
const sqlite3 = require('sqlite3'); 
const db = new sqlite3.Database('./database.sqlite'); 


weatherRouter.get('/', (req, res, next) => {
    db.all("SELECT * FROM Weather", (error, weather) => {
        if(error) {
            res.sendStatus(404); 
        } else {
            res.render('index', { 
                weather
            }); 
        }

    })
})

weatherRouter.post('/', (req, res, next) => {
    console.log(req.body); 
    const dateOfEntry = req.body.dateOfEntry; 
    console.log(dateOfEntry); 
    const outputTemperature = req.body.outputTemperature;
    const outputScale = req.body.outputScale;  
    if (!dateOfEntry || !outputTemperature || !outputScale) {
        res.sendStatus(400); 

    } else {
        db.run("INSERT INTO Weather (output_scale, output_temperature, date_of_entry) VALUES ($outputScale, $outputTemperature, $dateOfEntry)", 
        {   $outputScale: outputScale,
            $outputTemperature: outputTemperature,
            $dateOfEntry: dateOfEntry
        }, 
        (err) => {
            if(err) {
                console.log(err); 
                next(err); 
            } else {
                res.sendStatus(200); 
            }
            
        })
    }
})

module.exports = weatherRouter; 