const express = require('express');
const app = express();

//Routes for our port to listen for
app.get('/', (req, res) => {
    res.send({hi: 'there'})
});

//Ask heroku which port to listen to or set it to localhost:5000
const PORT = process.env.PORT || 5000;

app.listen(5000);
