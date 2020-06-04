exports.seed = function(knex) {
  return knex('tasks_contexts').insert([
    { task_id: 1, context_id: 1 },
    { task_id: 1, context_id: 2 },
    { task_id: 2, context_id: 5 },
    { task_id: 3, context_id: 4 },
    { task_id: 3, context_id: 1 },
    { task_id: 4, context_id: 3 },
    { task_id: 5, context_id: 4 },
    { task_id: 5, context_id: 1 },
    { task_id: 5, context_id: 2 },
    { task_id: 6, context_id: 1 },
    { task_id: 7, context_id: 3 },
    { task_id: 8, context_id: 2 },
    { task_id: 9, context_id: 3 },
    { task_id: 9, context_id: 5 },
    { task_id: 10, context_id: 2 },
    { task_id: 11, context_id: 3 },
    { task_id: 11, context_id: 4 },
    { task_id: 12, context_id: 2 },
    { task_id: 13, context_id: 1 },
    { task_id: 14, context_id: 5 },
    { task_id: 15, context_id: 4 },
    { task_id: 16, context_id: 3 },
    { task_id: 17, context_id: 1 },
    { task_id: 17, context_id: 5 },
    { task_id: 18, context_id: 4 }
  ]);
};
