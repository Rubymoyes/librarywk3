exports.seed = function (knex, Promise) {
  return knex('books').del()
    .then(function () {
      return knex('books').insert([
        {id: 99901, name: 'Search Inside Yourself: The Unexpected Path to Achieving Success, Happiness (and World Peace)', author: 'Chade-Meng Tan', genre: 'Guidance & Self-Help'},
        {id: 99902, name: '1984', author: 'George Orwell', genre: 'Science Fiction'},
        {id: 99903, name: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction'},
        {id: 99904, name: 'In Cold Blood', author: 'Truman Capote', genre: 'Non-fiction'},
        {id: 99905, name: 'The Odyssey', author: 'Homer', genre: 'Greek Epic'},
        {id: 99906, name: 'Hamlet', author: 'William Shakespeare', genre: 'Tragedy'},
        {id: 99907, name: 'Gone Girl', author: 'Gillian Flynn', genre: 'Mystery'},
        {id: 99908, name: 'Murder on the Orient Express', author: 'Agatha Christie', genre: 'Mystery'},
        {id: 99909, name: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure & Action'},
        {id: 99910, name: 'Into the Wild', author: 'Jon Krakauer', genre: 'Adventure & Action'}
      ])
    })
}
