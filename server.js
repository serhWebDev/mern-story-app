const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//bodyParser middleware
app.use(bodyParser.json());

//Db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port 5000'));