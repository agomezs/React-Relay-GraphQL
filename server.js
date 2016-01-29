import express from 'express';
import {MongoClient} from 'mongodb';

let app = express();

const PORT = 9005;
const MONGO_URL = 'mongodb://engls:3phf084hf023h0gwedfrd32s@ds051615.mongolab.com:51615/react-relay-graphql';

//app.get('/', (req,res) => res.send('This is express ;)'));
app.use(express.static('public'));

app.listen(PORT, () => console.log('Listening on port ' + PORT));

MongoClient.connect(MONGO_URL, (err, db) => {
  if(err) {
    console.log('Its not connected');
    throw err;
  }
  console.log("Connected correctly to server");

  db.collection('links').find({}).toArray((err, docs) => {
    if(err) {
      throw err;
    }
    console.log(docs);
  });
});
