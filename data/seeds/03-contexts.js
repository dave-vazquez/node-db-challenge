exports.seed = function(knex) {
  return knex('contexts').insert([
    { name: 'context_1' },
    { name: 'context_2' },
    { name: 'context_3' },
    { name: 'context_4' },
    { name: 'context_5' }
  ]);
};
