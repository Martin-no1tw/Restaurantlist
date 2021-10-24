// Load express
const express = require('express')
// Load express router
const router = express.Router()
// Load Restaurant model from restaurant.js
const Restaurant = require('../../models/restaurant')

// Set route of index page and corresponding response
router.get('/', (req, res) => {
  const userId = req.user._id

  Restaurant.find({ userId })
    .lean()
    .sort({ _id: 'asc' })
    .then(stores => res.render('index', { stores }))
    .catch(error => console.log(error))
})
// Export router
module.exports = router