const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1/Notetesting");

const db = mongoose.connection;

db.once('open', (err) => {
    if (err) {
        console.log('database not connected');
        return false;
    }
    console.log('database connected');
})

module.exports = db;