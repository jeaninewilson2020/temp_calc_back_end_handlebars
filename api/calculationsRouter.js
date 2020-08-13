const express = require('express'); 
const path = require('path'); 
const calculationsRouter = express.Router(); 
const sqlite3 = require('sqlite3'); 
const db = new sqlite3.Database('./database.sqlite'); 

//Create a new temp
calculationsRouter.post('/', (req, res, next) => {
    //console.log(req.body); 
    const dateOfEntry = req.body.time; 
    const outputTemperature = req.body.celsius; 
    if (!dateOfEntry || !outputTemperature) {
        res.sendStatus(400); 

    } else {
        db.run("INSERT INTO Calculations (date_of_entry, output_temperature) VALUES ($dateOfEntry, $outputTemperature)", 
        {
            $dateOfEntry: dateOfEntry, 
            $outputTemperature: outputTemperature
        }, 
        (err) => {
            if(err) {
                next(err); 
            } else {
                res.sendStatus(200); 
            }
            
        })
    }
})


/*const inputContainer = document.getElementById("input-container");

function getInput(number) {
    //If the inputContainer has it's default text of 0 
    const startingNumber = inputContainer.innerHTML; 
    //console.log(startingNumber); 
    const toNumber = Number(startingNumber); 
    if (toNumber === 0) {
    //Change it from zero to the first number entered 
        inputContainer.innerHTML = number; 
    } else if (toNumber > 0) {
    //If the number is larger than 0, add the input onto the end
        addTextNode(number); 
        console.log(inputContainer.innerHTML); 
    }
}

    function addTextNode(secondNumber) {
    const addNumber = document.createTextNode(secondNumber); 
    const newDefault = inputContainer.appendChild(addNumber);
    inputContainer.defaultValue = newDefault; 
   }

function clearInput() {
    inputContainer.innerHTML = '0'; 
}

function getCelsius() {
    //Calculates input in K to C and updates the output 
    const kelvin = inputContainer.innerHTML; 
    const celsius = Math.floor(kelvin - 273.15); 
    const output = document.getElementById("output-container"); 
    output.innerHTML = celsius; 
    

}

*/
module.exports = calculationsRouter; 