'use strict'

require('dotenv').config();
const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.DB_URL, (err) => {
    if(!err) {console.log('Connected to Database');}
    else {throw new Error(err);}
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log(`Listening to port 3000`)
})