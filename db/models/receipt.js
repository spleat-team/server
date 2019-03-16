var mongoose = require('mongoose');
const shortid = require('shortid');
var ObjectId = mongoose.Schema.Types.ObjectId;
var MongooseString = mongoose.Schema.Types.String;
var MongooseMap = mongoose.Schema.Types.Map;
var MongooseNumber = mongoose.Schema.Types.Number;

var receiptSchema = new mongoose.Schema({
  pincode: {
    type: MongooseString,
    default: shortid.generate
  },
  numOfPeople: {
    type: MongooseNumber
  },
  image: MongooseString,
  price: MongooseNumber,
  dishes: [
    {
      name: MongooseString,
      amount: MongooseNumber,
      usersIds: [MongooseString],
      price: MongooseNumber
    }
  ]
});

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;
