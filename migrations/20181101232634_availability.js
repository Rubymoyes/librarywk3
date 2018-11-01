
// Creating new table to .join() with 'books'


exports.up = (knex, Promise) => {
    return knex.schema.createTable('availability', (table) => {
      table.increments('id')
      table.string('availability_status')

      // OR

      table.string('availability_status')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('availability')
  }



// OR
// A new column to add to existing table 'books'



exports.up = function(knex, Promise) {
    return knex.schema.table("books", function(table) {
        table.increments('id');
        table.string('availability_status');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.Table("books", function(table) {
      table.dropColumn("id");
      table.dropColumn("availability_status");
    });
  };

  