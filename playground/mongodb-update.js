// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb server');

  // update
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a31285161473bcb764e607f')
  },{
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();

});
