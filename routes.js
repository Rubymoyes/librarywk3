const express = require('express')
const router = express.Router()
const db = require('./db')

let development = require("./knexfile").development;
let knex = require("knex")(development);


// Render books Page 

router.get('/', (req, res) => {
  db.getBooks()
  .then(books => {
    res.render('books-list', {books: books})
  })
})

// Render checkout page

router.get('/checkout/:id', (req, res) => {
  let id = req.params.id
  db.getCheckout()
  .where( {'books.id': id} )
  .then(books => {
    let book = books[0]
    res.render('checkout', book)
  })
})

// Post method: send data to db for availability]

router.post('/checkout/:id', (req, res) => {
  let id = req.params.id

  let status = req.body.userName
  db.updateAvailability(id, status)
  .then(() => {
    res.redirect('/checkout/' + id)
    // res.redirect('/')
  })
  .catch(err => {
    console.log(err)
  })
})



module.exports = router
