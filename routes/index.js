const express = require('express')
const router = express.Router()

const Restaurants = require('./modules/Restaurants')

router.use('/Restaurants', Restaurants)

module.exports = router