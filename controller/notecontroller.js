const Note = require('../model/notes');

module.exports.addnotes = function(req, res) {
    Note.create(req.body, function(err, noteData) {
        console.log(req.body);

        if (noteData) {
            return res.json({ 'message': "Record inserted" });
        } else {
            return res.json({ 'message': "something wrong" });
        }
    })
}


module.exports.viewnotes = function(req, res) {
    Note.find({}, function(err, NoteDetails) {
        if (err) {
            return res.json({ 'message': "something wrong" });
        }
        if (NoteDetails) {
            return res.json({ 'message': "All record is here", 'NoteDetails': NoteDetails });
        }
    })
}

module.exports.updatenotes = function(req, res) {
    Note.findById(req.params.id, function(err, Notedata) {
        console.log(req.params.id);
        if (err) {
            return res.json({ message: 'id not found' });
        }
        if (Notedata) {
            Note.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
                if (err) {
                    console.log(req.body);
                    return res.json({ message: 'can not update note' });
                } else {
                    return res.json({ message: 'note  data updated' })
                }
            })
        }
    })
}

module.exports.deletenotes = function(req, res) {
    Note.findById(req.params.id, function(err, Notesdata) {
        console.log(req.params.id);
        if (err) {
            return res.json({ message: 'id not found' });
        }
        if (Notesdata) {
            Note.findByIdAndDelete(req.params.id, req.body, (err, data) => {
                if (err) {
                    console.log(req.body);
                    return res.json({ message: 'can not delete data' });
                } else {
                    return res.json({ message: "record deleted successsfully" });
                }
            })
        }
    })
}