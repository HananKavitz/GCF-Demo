var app = require('express')();
var port = 8080;

app.use('/', function(req,res) {
    res.status(200).send('Hello world');
});

app.listen(port, function(){
    console.log(`Server is running on ${port}`)
})

// exports.helloWorld = function(req,res) {
//     res.status(200).send('Hello world');
// }