var router = require('express').Router();
const { Receipt } = require('../db');

router.post('/', async (req, res) => {
  const receipt = new Receipt({
    numOfPeople: req.body.numOfPeople,
    //image: req.body.picture,
    dishes: [
      {
        name: 'מנה טעימה',
        amount: 3,
        users: []
      }
    ]
  });

  const r = await receipt.save();
  res.send(r);
});

router.get('/:pincode', async (req, res) => {
  const reciept = await Reciept.find({ _id: req.params.pincode });
  res.send(receipt);
});

router.post('/:pincode/dishes', (req, res) => {
  res.send(req.params.pincode);
});

module.exports = router;
