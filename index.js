const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; 
app.listen(PORT);

//console.developers.google.com
//localhost:5000
//https://evening-meadow-85990.herokuapp.com/
//https://git.heroku.com/evening-meadow-85990.git

//client ID 
//client secret 
