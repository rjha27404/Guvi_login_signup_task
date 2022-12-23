// importing libraries
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/mongoose');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());



app.use('/', require('./routes'));

app.listen(process.env.port || 9002,() => {
    console.log("BE started at port 9002")
})