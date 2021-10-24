const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/search', (req, res) => {
  // Prevent blank space shown in keyword
  const keyword = req.query.keyword.trim()
  // Select the name-matched restaurants or the category-matched restaurants
  Restaurant.find()
    .lean()
    .then(allRestaurants => {
      const restaurants = allRestaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase())
      })
      // Provide hint message (used when there's no matched restaurants in restaurant array)
      let searched_msg = ``
      if (restaurants.length === 0) {
        searched_msg = `No matched results :(`
      }
      // Pass data to handlebars
      res.render('index', { restaurants: restaurants, keyword: keyword, searched_msg: searched_msg })
    })
    .catch(error => console.log(error))
})


module.exports = router