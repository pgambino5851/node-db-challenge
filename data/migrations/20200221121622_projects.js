
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text("name", 256)
                .unique()
                .notNullable();
            tbl.text("description", 256)
            tbl.boolean("completed").defaultTo("false");
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text("description", 256)
                .notNullable();
            tbl.text("notes", 256)
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl.boolean("completed")
                .defaultTo("false")
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.text('name', 256)
                .unique()
                .notNullable();
            tbl.text('description', 256);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')

        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources');
};
