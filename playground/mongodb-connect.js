// const MongoClient = require('mongodb').MongoClient;
// same as above line {MongoClient}
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'umar', age:30};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
      return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if(err) {
    //     return console.log('unable to insert todo', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // console.log('Showing db value: ', db);

    // Insert new Document into Users (name, age, location)
    // db.collection('Users').insertOne({
    //   name: 'Umar',
    //   age: 25,
    //   location: 'BWP'
    // }, (err, result) => {
    //   if(err) {
    //     return console.log('Unable to Insert user', err);
    //   }
    //   console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});
