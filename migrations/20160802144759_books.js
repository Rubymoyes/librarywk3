exports.up = (knex, Promise) => {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('author')
    table.string('genre')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('books')
}
