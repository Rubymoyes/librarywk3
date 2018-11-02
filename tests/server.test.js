const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

// Jest Tests - Database

jest.mock('../db', () => ({
  getBooks: () => Promise.resolve(
    {id: 99901, name: 'Search Inside Yourself: The Unexpected Path to Achieving Success, Happiness (and World Peace)', author: 'Chade-Meng Tan'}
  ),
}))

// jest.mock('../db', () => ({
//   getCheckout: () => Promise.resolve(
//   {id: 99901, name: 'Search Inside Yourself: The Unexpected Path to Achieving Success, Happiness (and World Peace)', author: 'Chade-Meng Tan'}
// ),
// }))


// Basic HTML test

test('GET /', () => {
  return request(server)
    .get('/')
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firsth1Text = $('h1').first().text()
      expect(firsth1Text).toBe('Books')
    })
    .catch(err => expect(err).toBeNull())
})


test('GET /checkout/:id', () => {
  return request(server)
    .get('/checkout/:id')
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firsth1Text = $('h1').first().text()
      expect(firsth1Text).toEqual('Checkout Page')
    })
    .catch(err => expect(err).toBeNull())
})