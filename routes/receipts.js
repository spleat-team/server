var router = require('express').Router();

router.post('/upload', (req, res) => {
  res.send('Nave');
});

router.get('/:pincode', (req, res) => {
  res.send(req.params.pincode);
});

router.post('/:pincode/dishes', (req, res) => {
  res.send(req.params.pincode);
});

module.exports = router;
