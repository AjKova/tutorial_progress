//require modules
var express = require('express')
var todoController = require('./controllers/todoController')

//intialize module 
var app = express();

//set up view engine
app.set('view engine', 'ejs')

//set up static files like css
app.use(express.static('./public'))


//fire up controllers
todoController(app);


//listen to a port 
app.listen(4000)
console.log('You re now listening to port 4000')