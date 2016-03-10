import fs from 'fs';
import express from 'express';
import Schema from './data/schema';
import ExpressGraphql from 'express-graphql';
import {MongoClient} from 'mongodb';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';

const PORT = 9005;
const MONGO_URL = 'mongodb://engls:3phf084hf023h0gwedfrd32s@ds051615.mlab.com:51615/react-relay-graphql';
// const MONGO_URL = 'mongodb://localhost:27017/rgrjs';

let app = express();
app.use(express.static('public'));

// let db;
// MongoClient.connect(MONGO_URL, (err, database) => {
//   if(err) { throw err; }
//
//   db = database;
//   app.use('/graphql', ExpressGraphql({
//     schema: schema(db),
//     graphiql: true
//   }));
//
//   app.listen(PORT, () => console.log('Listening on port ' + PORT));
// });

(async () => {
  try {
    let db = await MongoClient.connect(MONGO_URL);
    let schema = Schema(db)

    app.use('/graphql', ExpressGraphql({
      schema,
      graphiql: true
    }));

    app.listen(PORT, () => console.log('Listening on port ' + PORT));

    // Generates the schema.json
    let json = await graphql(schema, introspectionQuery);
    fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
      if(err) {
        throw err;
      } else {
        console.log('The JSON schema was created')
      }
    });
  } catch(e) {
    console.log('ERROR on START ', e);
  }

})();



// app.get('/data/links', (req, res) => {
//   db.collection('links').find({}).toArray((err, docs) => {
//     if(err) { throw err; }
//     res.json(docs);
//   });
// });
