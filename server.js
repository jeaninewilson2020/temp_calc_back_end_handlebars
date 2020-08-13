const express = require('express'); 
const path = require('path'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const morgan = require('morgan'); 
const cors = require('cors'); 
const errorhandler = require('errorhandler'); 
const PORT = process.env.PORT || 4000; 
const exphbs = require('express-handlebars'); 

const apiRouter = require('./api/api')

//Handlebars middleware

app.engine('handlebars', exphbs({defaultLayout: 'main'})); 
app.set('view engine', 'handlebars'); 

app.use(bodyParser.json()); 
app.use(express.urlencoded({extended: false})); 
app.use(morgan('dev')); 
app.use(cors()); 
app.use(errorhandler(true)); 

app.use('/api', apiRouter); 

//Set static folder
app.use(express.static(path.join(__dirname, 'public'))); 

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`); 
})

module.exports = app; 