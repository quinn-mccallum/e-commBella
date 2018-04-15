exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('bookings', function (table) {
        table.increments('id').primary(); // adds incrementing int for id
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('email').notNullable()
        table.string('address1').notNullable();
        table.string('address2');
        table.string('city').notNullable();
        table.string('prov_state').notNullable();
        table.string('country').notNullable();
        table.string('postal_zip').notNullable();
        table.string('title').notNullable();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('phone').notNullable();
        table.string('phone2') // NULLABLE!
        table.string('arrival_date').unique().notNullable();
        table.string('departure_date').unique().notNullable();
        table.string('total_guests').notNullable();
        table.string('adult_guests').notNullable();
        table.string('kid_guests').notNullable();
        table.string('pet_amt').notNullable();
        table.string('pet_type');
        table.string('comments');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('bookings') // drop table when reverting
};
