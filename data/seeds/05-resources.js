exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'resource_1', description: 'description_1' },
    { name: 'resource_2', description: 'description_2' },
    { name: 'resource_3', description: 'description_3' },
    { name: 'resource_4', description: 'description_4' },
    { name: 'resource_5', description: 'description_5' },
    { name: 'resource_6', description: 'description_6' },
    { name: 'resource_7', description: 'description_7' },
    { name: 'resource_8', description: 'description_8' },
    { name: 'resource_9', description: 'description_9' },
    { name: 'resource_10', description: 'description_10' }
  ]);
};
