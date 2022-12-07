const express = require('express');

const routes = express.Router();

const Notecontroller = require('../../../controller/notecontroller');

routes.post('/addnotes', Notecontroller.addnotes);

routes.get('/viewnotes', Notecontroller.viewnotes);

routes.patch('/updatenotes/:id', Notecontroller.updatenotes);
routes.delete('/deletenotes/:id', Notecontroller.deletenotes);


module.exports = routes;