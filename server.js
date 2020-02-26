const express = require("express");
const path = require("path");
const app = express();

// Serve static files....
app.use(express.static(__dirname + "/dist/sample-application"));

// Send all requests to index.html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/sample-application/index.html"));
});

// default AWS PORT
app.listen(process.env.PORT || 4200);
