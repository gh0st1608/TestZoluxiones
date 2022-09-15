const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');

router.get('/users/:userId', UserController.getUserById);
router.post('/user', UserController.postUser);


module.exports = router;