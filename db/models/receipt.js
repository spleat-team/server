var mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;
var MongooseString = mongoose.Schema.Types.String;
var MongooseMap = mongoose.Schema.Types.Map;
var MongooseNumber = mongoose.Schema.Types.Number;

var receiptSchema = new mongoose.Schema({
    _id: ObjectId,
    users: {
        type: MongooseMap,
        of: MongooseNumber
    },
    image: MongooseString
});