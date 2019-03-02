const mongoose = require('mongoose');
const User = require('./models/user');
const Receipt = require('./models/receipt');

const connectToDB = () => {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  const db = mongoose.connection;
  db.on('error', () => console.error('error with db server'));
  db.once('open', () => console.log('We are connected to db server'));
};

module.exports = {
  connectToDB,
  User,
  Receipt
};
