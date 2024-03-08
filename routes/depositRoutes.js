const express = require('express');
const router = express.Router();
const profileController = require('../controller/userController');


router.post('/', profileController.createProfile);

router.get('/', profileController.getAllProfiles);

router.get('/:walletAddress', profileController.getProfileByWalletAddress);

module.exports = router;
