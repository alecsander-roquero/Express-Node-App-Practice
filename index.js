const express = require('express');
const app = express();
app.get('/', (req,res) => {
    res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT);
//localhost:5000
//https://evening-meadow-85990.herokuapp.com/
//https://git.heroku.com/evening-meadow-85990.git