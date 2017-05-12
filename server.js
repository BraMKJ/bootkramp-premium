'use strict';
const express = require('express');
const app = express();
// Assign port number
const PORT = 8080;
/* serve main page */
app.get("/", function(req, res) {
   res.sendFile( __dirname + '/example-template.html');
});
/* serves other static files if url matches */
app.get(/^(.+)$/, function(req, res){
    console.log('static file request : ' + req.params);
    res.sendFile( __dirname + req.params[0]);
});
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
