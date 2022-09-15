const express = require('express');
const router = express.Router();
const PeopleController = require('../controller/starwars.controller');

//router.get('/people/', UserController.getUserById);
router.get('/people/:peopleId', PeopleController.getPeopleById);
//router.get('/people/schema', UserController.getUserById);

module.exports = router;