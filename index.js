const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app)

//Ask heroku which port to listen to or set it to localhost:5000
const PORT = process.env.PORT || 5000;

app.listen(PORT);

