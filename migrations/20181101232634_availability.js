// // A new column to add to existing table 'books'



exports.up = function(knex, Promise) {
    return knex.schema.table("books", function(table) {
        table.string('availability_status');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.Table("books", function(table) {
      table.dropColumn("availability_status");
    });
  };

  