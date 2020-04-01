const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");


const app = express();

const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.set('view engine', 'html');
app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/db"));


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
}); 


// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// app.get("/notes", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/notes.html"));
// });


// app.get("/api/notes", function(req, res) {
//   res.json(notes);
// });

// app.post("/api/notes", function (req, res){
//   var updatedNote = req.body;
//   res.send(updatedNote)
// });




 

  