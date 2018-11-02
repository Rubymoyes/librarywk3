const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

// Jest Tests - Database

jest.mock('../db', () => ({
  getBook: () => Promise.resolve(
    {id: 99901, name: 'Search Inside Yourself: The Unexpected Path to Achieving Success, Happiness (and World Peace)', author: 'Chade-Meng Tan'}
  ),
  getBooks: () => Promise.resolve(
    [{id: 99901, name: 'Search Inside Yourself: The Unexpected Path to Achieving Success, Happiness (and World Peace)', author: 'Chade-Meng Tan'}]
  ),
}))

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

//Basic HTML test two


test('GET /checkout/99901', () => {
  return request(server)
    .get('/checkout/99901')
    .then((res) => {
      const $ = cheerio.load(res.text)
      const firsth1Text = $('h1').first().text()
      expect(firsth1Text).toBe('Checkout Page')
    })
    .catch(err => expect(err).toBeNull())
})

// test("check text id is correct", (done) => {
//   return request(server)
//     .get('/checkout/99901').end(function (err, res) {
//       console.log(res.text)
//       expect(err).toBeNull()
//       let expected = 'Checkout Page'
//       let $ = cheerio.load(res.text)
//       let actual = $('h1').first().text()
//       expect(actual).toEqual(expected)

//       done()

//   })
// }) 