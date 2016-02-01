import express from 'express';
import {MongoClient} from 'mongodb';

let app = express();
let db;

const PORT = 9005;
// const MONGO_URL = 'mongodb://engls:3phf084hf023h0gwedfrd32s@ds051615.mongolab.com:51615/react-relay-graphql';
const MONGO_URL = 'mongodb://localhost:27017/rgrjs';

//app.get('/', (req,res) => res.send('This is express ;)'));
app.use(express.static('public'));

MongoClient.connect(MONGO_URL, (err, database) => {
  if(err) { throw err; }
  db = database;
  app.listen(PORT, () => console.log('Listening on port ' + PORT));
});

app.get('/data/links', (req, res) => {
  db.collection('links').find({}).toArray((err, docs) => {
    if(err) { throw err; }
    res.json(docs);
  });
});
