exports.seed = function(knex) {
  return knex('projects').insert([
    { name: 'project_1', description: 'description_1', completed: false },
    { name: 'project_2', description: '', completed: false },
    { name: 'project_3', description: 'description_3', completed: false },
    { name: 'project_4', description: 'description_4', completed: true },
    { name: 'project_5', description: '', completed: false }
  ]);
};
