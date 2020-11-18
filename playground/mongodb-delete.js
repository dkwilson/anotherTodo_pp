// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('Users').deleteMany({ name: 'Andrew' });

    db.collection('Users')
      .findOneAndDelete({
        _id: new ObjectId('5fb44811636aaadff62dcf21'),
      })
      .then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
      });

    // db.close();
  }
);
