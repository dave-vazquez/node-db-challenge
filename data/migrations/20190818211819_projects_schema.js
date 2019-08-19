exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.varchar('name', 255).notNullable();
      tbl.varchar('description', 255);
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(0);
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.varchar('description').notNullable();
      tbl.varchar('notes');
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(0);
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id');
    })
    .createTable('contexts', tbl => {
      tbl.increments();
      tbl.varchar('name', 255).notNullable();
    })
    .createTable('tasks_contexts', tbl => {
      tbl.increments();
      tbl
        .integer('task_id')
        .unsigned()
        .notNullable()
        .references('tasks.id');
      tbl
        .integer('context_id')
        .unsigned()
        .notNullable()
        .references('contexts.id');
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.varchar('name', 255).notNullable();
      tbl.varchar('description', 255);
    })
    .createTable('projects_resources', tbl => {
      tbl.increments();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id');
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resources.id');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks_contexts')
    .dropTableIfExists('contexts')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
