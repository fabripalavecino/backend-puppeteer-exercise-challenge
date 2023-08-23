exports.recreateSchema = function (knex, callback) {
    callback = callback || function () {};
  
    /* Drop  tables invoices and re-create table */
    knex.schema.dropTableIfExists('INVOICES')
      .then(function() {
        return knex.schema.dropTableIfExists('INVOICES');
      }).then(function () {
        return knex.schema.createTable('INVOICES', function(tbl) {
          tbl.increments('ID').primary();
          tbl.string('DATE');
          tbl.string('TYPE');
          tbl.string('AMMOUNT');
          tbl.string('STATE');
        });
      }).then(function () {
        callback();
      }).catch(function (err) {
        callback(err);
      });
  };