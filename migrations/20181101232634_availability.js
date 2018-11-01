// // A new column to add to existing table 'books'

exports.up = function(knex, Promise) {
    return knex.schema.table("books", function(table) {
        table.string('status');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table("books", function(table) {
      table.dropColumn("status");
    });
  };

  