// schemas/profileSchema.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  website: String,
  twitter: String,
  walletAddress: String,
  stakingAddress: String
});

module.exports = mongoose.model('Profile', profileSchema);