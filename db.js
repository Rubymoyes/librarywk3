const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBooks: getBooks,
  getCheckout: getCheckout,
  updateAvailability: updateAvailability
}

// get and post form data to the database

function getBooks (testConn) {
  const conn = testConn || connection
  return conn('books').select()
}


// Go to the checkout page

function getCheckout (testConn) {
  const conn = testConn || connection
  return conn('books').select()
}

// Change availability status

function updateAvailability (id, status, testConn) {
  console.log(status, testConn)
  const conn = testConn || connection
  return conn('books')
  .update({status: status})
  .where('id', id)
}