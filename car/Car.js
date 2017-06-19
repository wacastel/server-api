// User.js
var mongoose = require('mongoose');
var CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  accel: String,
  year: String
});
mongoose.model('Car', CarSchema);

module.exports = mongoose.model('Car');
