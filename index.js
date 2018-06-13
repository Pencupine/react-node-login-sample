const express = require('express');
const path = require('path');
const idKeys = require('./reqkeys/keys');

const app = express();

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/api/keys', (req, res) => {

  res.json(idKeys);
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);
