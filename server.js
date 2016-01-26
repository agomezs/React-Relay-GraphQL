
import express from 'express';

let app = express();

app.get('/', (req,res) => res.send('This is express ;)'));

app.listen(9005);
