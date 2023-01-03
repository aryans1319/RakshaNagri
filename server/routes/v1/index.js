const express = require('express');
const { ProfileController, TickitController } = require('../../controllers/index');
const router = express.Router();

router.post('/profile', ProfileController.createProfile);
router.get('/profile', ProfileController.getProfile);




router.post('/tickit', TickitController.createTickit);
router.get('/tickit', TickitController.getAllTickit);
router.delete('/tickit/:id', TickitController.deleteTickit);
router.patch('/tickit/:id', TickitController.updateTickit);
/*

*/
module.exports = router;