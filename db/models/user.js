var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;
var MongooseString = mongoose.Schema.Types.String;

var userSchema = new mongoose.Schema({
  _id: ObjectId,
  email: MongooseString,
  password: MongooseString
});

const User = mongoose.model('User', userSchema);

module.exports = User;
