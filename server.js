import express from 'express';
import schema from './data/schema';
import ExpressGraphql from 'express-graphql';
import {MongoClient} from 'mongodb';

const PORT = 9005;
const MONGO_URL = 'mongodb://engls:3phf084hf023h0gwedfrd32s@ds051615.mongolab.com:51615/react-relay-graphql';
// const MONGO_URL = 'mongodb://localhost:27017/rgrjs';

let app = express();
let db;
app.use(express.static('public'));

MongoClient.connect(MONGO_URL, (err, database) => {
  if(err) { throw err; }
  db = database;

  app.use('/graphql', ExpressGraphql({
    schema: schema(db),
    graphiql: true
  }));

  app.listen(PORT, () => console.log('Listening on port ' + PORT));
});

// app.get('/data/links', (req, res) => {
//   db.collection('links').find({}).toArray((err, docs) => {
//     if(err) { throw err; }
//     res.json(docs);
//   });
// });
