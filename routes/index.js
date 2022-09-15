const express = require('express');
const router = express.Router();

const UserRoute = require('./user.route');
const StarWarsRoute = require('./starwars.route');

router.use('/', UserRoute);
router.use('/starwars', StarWarsRoute);

module.exports = router;