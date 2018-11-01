const express = require('express')
const router = express.Router()
const db = require('./db')

let development = require("./knexfile").development;
let knex = require("knex")(development);

// Home Page

router.get('/', (req, res) => {
  // db.getUsers()
  //   .then(users => {
  //     res.render('index', {users: users})
  //   })
  //   .catch(err => {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
  db.getBooks()
  .then(books => {
    res.render('books-list', {books: books})
  })
})


// res.render data from database directly to /books page


// get and post form data to the database and return it to the books page


module.exports = router
