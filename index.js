const compression = require('compression');
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(compression());

for (let route in routes) {
  app.use(`/${route}`, routes[route]);
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 8000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
