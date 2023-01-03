const express = require('express');
const { ProfileController } = require('../../controllers/index');
const router = express.Router();

router.post('/profile', ProfileController.createProfile);
router.get('/profile', ProfileController.getProfile);
module.exports = router;