const compression = require('compression');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const db = require('./db');

require('dotenv').config();
db.connectToDB();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(compression());

for (let route in routes) {
  app.use(`/${route}`, routes[route]);
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 8000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
