var mongoose = require('mongoose');
const shortid = require('shortid');
var ObjectId = mongoose.Schema.Types.ObjectId;
var MongooseString = mongoose.Schema.Types.String;
var MongooseMap = mongoose.Schema.Types.Map;
var MongooseNumber = mongoose.Schema.Types.Number;

var receiptSchema = new mongoose.Schema({
  //   _id: {
  //     type: O
  //   },
  //   users: {
  //     type: MongooseMap,
  //     of: MongooseNumber
  //   },
  pincode: {
    type: MongooseString,
    default: shortid.generate
  },
  numOfPeople: {
    type: MongooseNumber
  },
  image: MongooseString,
  dishes: [
    {
      name: MongooseString,
      amount: MongooseNumber,
      usersIds: [MongooseString]
    }
  ]
});

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;
