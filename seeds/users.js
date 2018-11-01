
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org'},
        {id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org'},
        {id: 99903, name: 'Curious Capybara', email: 'capybara@example.org'},
        {id: 99904, name: 'Dilapidated Duck', email: 'duck@example.org'},
        {id: 99905, name: 'Exuberant Elephant', email: 'elephant@example.org'},
        {id: 99906, name: 'Fascinated Flying Fox', email: 'flying.fox@example.org'}
      ]);
    });
};
