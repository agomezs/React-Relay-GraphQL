

## Basic express with babel
- express
- babel
- babel-cli

```js
import express from 'express';

let app = express();

app.get('/', (req,res) => res.send('This is express ;)'));

app.listen(9005);
```


## Install babel

npm install -g babel

- babel
- babel-preset-react
- babel-preset-es2015
- babel-cli

### Global

- babel-cli

WebPack
- Query: {
    presets: ['react', 'es2015']
}
