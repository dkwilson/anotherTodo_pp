// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('Users')
      .find({ name: 'Andrew' })
      .toArray()
      .then(
        (docs) => {
          console.log(JSON.stringify(docs, undefined, 2));
        },
        (err) => {
          console.log('Unable to fetch todos', err);
        }
      );

    // db.close();
  }
);
