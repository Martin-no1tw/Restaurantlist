const e = require('express')
/*****required package and framework*****/
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const restaurants = require('./restaurant.json')

const port = 3000

/***** setting handlebars *****/
app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')

/***** setting static files *****/
app.use(express.static('public'))

/***** setting routers *****/
app.get('/', (req, res) => {
  res.render('index', { restaurantList: restaurants.results })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const keywordArray = keyword.trim().toLowerCase().split(' ')
  const search_results = []
  let showErrMsg = false
  /***** if there are results *****/
  for (restaurant of restaurants.results) {
    for (word of keywordArray) {
      if (restaurant.name.toLowerCase().includes(word) && !search_results.includes(restaurant)) {
        search_results.push(restaurant)
      }
      if (restaurant.category.toLowerCase().includes(word) && !search_results.includes(restaurant)) {
        search_results.push(restaurant)
      }
    }
  }
  /***** if there no results *****/
  if (search_results.length === 0) {
    showErrMsg = true
  }
  res.render('index', { restaurantList: search_results, keyword, showErrMsg })
})

app.get('/:restaurant_id', (req, res) => {
  const show_result = restaurants.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { show_result })
})

/***** setting listener*****/
app.listen(port, () => {
  console.log('The server is listening...')
})