/*****required package and framework*****/
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const routes = require('./routes')
const methodOverride = require('method-override')
const port = 3000
app.use(methodOverride('_method'))


require('./config/mongoose')

/***** setting handlebars *****/
app.engine('hbs', exphbs({ defaultLayouts: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

/***** setting static files *****/
app.use(express.static('public'))


app.use(methodOverride('_method'))
/***** setting routers *****/
app.use(routes)

/***** setting listener*****/
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})