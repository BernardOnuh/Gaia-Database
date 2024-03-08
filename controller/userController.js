const Profile = require('../models/user');



exports.createProfile = async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.send('Profile created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating profile');
  }
};

exports.getProfileByWalletAddress = async (req, res) => {
  try {
    const profiles = await Profile.find({ walletAddress: req.params.walletAddress });
    if (profiles.length === 0) {
      return res.status(404).send('Profiles not found');
    }
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving profiles');
  }
};
 

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving profiles');
  }
};