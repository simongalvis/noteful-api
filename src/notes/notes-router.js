const express = require ("express");
const xss = require("xss");
const NotesService = require("./notes-service")
const path =  require("path")

const notesRouter = express.Router();
const jsonParser = express.json();

serializeNote = (note) =>({
    id:note.id,
    title:xss(note.title),
    content:xss(note.content),
    date_published: note.date_published
})

 notesRouter
    .route("/")
    .get((req, res, next) =>{
         const knexInstance = req.app.get("db")
        NotesService.getAllNotes(knexInstance)
            .then((notes) =>{
                res.json(notes.map(serializeNote))
            })
            .catch(next); 
           
    }) 




    module.exports = notesRouter;