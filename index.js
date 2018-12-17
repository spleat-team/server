var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 8000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
