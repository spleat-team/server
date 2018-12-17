var router = require('express').Router();

router.post('/signin', (req, res) => {
  res.send('Sandri');
});

router.post('/signup', (req, res) => {
  res.send('Sandri');
});

module.exports = router;
