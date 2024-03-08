// schemas/profileSchema.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  image: String,
  website: String,
  twitter: String,
  nftAddress: String
});

module.exports = mongoose.model('Profile', profileSchema);
