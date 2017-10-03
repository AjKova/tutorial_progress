//require module 

var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//connect to monogodb database
mongoose.connect('mongodb://kage:hokage@ds161194.mlab.com:61194/todo')

var todoSchema = new mongoose.Schema({
	item : String
})

var Todo = mongoose.model('Todo', todoSchema);
/*var itemOne = Todo({item: "Finish up Traning"}).save(function(err){
	if(err) throw err; 
		console.log('item saved');
})*/

var urlencodedParser = bodyParser.urlencoded({extended : false})

//data variable
	var data = [{item : "Coding"}, {item : "Firebase"}, {item : "Node.js"}];
//creating a module
module.exports = function(app) {

	app.get('/todo', function(req, res){

		Todo.find({}, function(err, data){
			if(err) throw err;
			res.render('todo', {todos: data})
			console.log(data)
		})	

		
	})

	app.post('/todo', urlencodedParser, function(req, res){
		var newTodo = Todo(req.body).save(function(err, data){
			if(err) throw err;
			res.json(data);
		})
		/*data.push(req.body)
		res.json(data)*/
	})

	app.delete('/todo/:item', function(req, res){
		Todo.find({item : req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
			if(err) throw err;
			res.json(data)
		})

		/*data = data.filter(function(todo){
			return todo.item.replace(/ /g, '-') !== req.params.item;
		})
		res.json(data)*/
	})

}