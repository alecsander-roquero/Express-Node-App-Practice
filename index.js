const express = require('express');
require('./services/passport');

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
