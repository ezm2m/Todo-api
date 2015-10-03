var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Do yard',
	completed: false
}, {
	id: 2,
	description: 'Go to store',
	completed: false
}, {
	id: 3,
	description: 'train',
	completed: true
}];

app.get('/', function (req, res) {
	res.send('todo API Root');
});

app.get('/todos', function (req, res) {
	res.json(todos);
});

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach(function (todo) {
		if (todo.id === todoId) {
			matchedTodo = todo;
		}
	});
	if(matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
});

app.get('/todos')
app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT + '!');
});
