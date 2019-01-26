var app = require('express')();
var port = 8080;

const functions = require("firebase-functions");

app.use('/', function(req,res) {
    res.status(200).send('Hello world');
});


const api = functions.https.onRequest(app);
// app.listen(port, function(){
//     console.log(`Server is running on ${port}`)
// })

// exports.helloWorld = function(req,res) {
//     res.status(200).send('Hello world');
// }
module.exports = {
    app
}