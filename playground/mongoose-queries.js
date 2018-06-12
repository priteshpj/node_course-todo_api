const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
var id = '5b1fada864171f73c3c41cb0'

if (!ObjectID.isValid(id)){
  console.log('ID not valid');
}
Todo.find({
  _id:id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id:id
}).then((todo) => {
  console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('')
  }
  console.log('TodoById', todo);
}).catch((e) => console.log(e));