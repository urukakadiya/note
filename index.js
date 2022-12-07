const express = require('express');

const port = 8007;

const app = express();

const path = require('path');

const db = require('./config/mongoose');
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./router'));

app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return false;
    }
    console.log("server is running on port:", port);
})