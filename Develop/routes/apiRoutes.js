const fs = require("fs");
const util = require("util");



module.exports = function(app) {
    var notesDataArray = require("../db/db.json");
    const writeFileAsync = util.promisify(fs.writeFile);

app.get("/api/notes", function(req, res) {
    res.json(notesDataArray);
});
    
app.post("/api/notes", function (req, res) {
    var newNote = {text:req.body.text, title:req.body.title, id:notesDataArray.length}
    notesDataArray.push(newNote);
   var notesDataString = JSON.stringify(notesDataArray);
    writeFileAsync("db/db.json", notesDataString).then(function (error) { 
        if (error) {
            console.log(error);
        }
        console.log("Note is written!", notesDataArray);
        res.json(notesDataArray);
    });
});
app.delete("/api/notes/:id", function(req,res){
    console.log("received");
    var keepArray = notesDataArray.filter(note => note.id!= req.params.id)
    var notesDataString = JSON.stringify(keepArray);
    writeFileAsync("db/db.json", notesDataString).then(function (error) { 
        if (error) {
            console.log(error);
        }
        console.log("Note is written!", notesDataArray);
        res.json(keepArray);
    });

})

}
 