//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MonogDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  //deleteMany
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne

  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({text: "eat lunch"}).then((result) => {
    console.log(result);
  });
  //client.close();
});
