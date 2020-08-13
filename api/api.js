const express = require('express'); 
const path = require('path'); 
const apiRouter = express.Router(); 
const app = require('../server');
const calculationsRouter = require('./calculationsRouter.js'); 
const weatherRouter = require('./weatherRouter.js'); 

apiRouter.use('/calculations', calculationsRouter); 
apiRouter.use('/weather', weatherRouter); 

module.exports = apiRouter; 