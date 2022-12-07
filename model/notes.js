const mongoose = require('mongoose');
const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },

});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;