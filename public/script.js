//const sqlite3 = require('sqlite3'); 
//const db = new sqlite3.Database('./database.sqlite'); 


const inputContainer = document.getElementById("input-container");

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
    const today = new Date(); 
    const time = today.getHours()+":"+today; 
   //Prevent autorefresh on the page 
    const form = document.getElementById("form"); 
    function handleForm (event) {
       event.preventDefault(); 
    }
    form.addEventListener('submit', handleForm); 
//Post request to the router 

    const data = {time, celsius}; 
    const options = {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data) 
    }; 
    fetch('/api/calculations', options); 

    
}