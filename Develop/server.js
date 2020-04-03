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

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
