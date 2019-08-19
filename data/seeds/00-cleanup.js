exports.seed = async function(knex) {
  try {
    await knex.truncate('projects_resources');
    await knex.truncate('resources');
    await knex.truncate('tasks_contexts');
    await knex.truncate('contexts');
    await knex.truncate('tasks');
    await knex.truncate('projects');
  } catch (err) {
    console.error(err);
  }
};
