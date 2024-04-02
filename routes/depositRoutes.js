const express = require('express');
const router = express.Router();
const profileController = require('../controller/userController');


router.post('/', profileController.createProfile);

router.get('/', profileController.getAllProfiles);

router.get('/:walletAddress', profileController.getProfileByWalletAddress);

router.get('/profile/:stakingAddress', profileController.getProfileByStakingAddress);


module.exports = router;
