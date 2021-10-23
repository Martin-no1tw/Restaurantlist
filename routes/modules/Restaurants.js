const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/', (req, res) => {
  const userId = req.user._id
  const name = req.body.name
  return Todo.create({ name, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


module.exports = router