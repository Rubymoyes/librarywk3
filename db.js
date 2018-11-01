const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
}

function showList ()

function updateAvailability ()

function checkoutBook ()

// get and post form data to the database


