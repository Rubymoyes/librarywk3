const testEnv = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))






// Basic Test

test('Working.', function () {
  expect(true).toBe(true)
})

// Test 1 - getBooks

test('getBooks gets the list of books', () => {
  // One for each letter of the alphabet!
  const expected = 10
  return db.getBooks(testDb)
    .then(books => {
      const actual = books.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

// Test 2

