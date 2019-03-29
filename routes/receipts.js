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
        usersIds: [],
        price: 50
      }
    ],
    price: 50
  });

  const r = await receipt.save();
  res.send(r);
});

router.get('/:pincode', async (req, res) => {
  const receipt = await Receipt.findOne({ pincode: req.params.pincode });
  res.send(receipt);
});

// router.post('/:pincode/dishes', async (req, res) => {
//   const receipt = await Receipt.find({ _id: req.params.pincode });
//   res.send(receipt);
// });

module.exports = router;
