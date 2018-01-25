const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());

app.listen(3000, () => 
  console.log('Char Sortinator Part Deux listening on port 3000', __dirname)
)