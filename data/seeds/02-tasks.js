exports.seed = function(knex) {
  return knex('tasks').insert([
    { description: 'task_1', notes: 'notes_1', completed: false, project_id: 1 },
    { description: 'task_2', notes: '', completed: false, project_id: 1 },
    { description: 'task_3', notes: 'notes_3', completed: false, project_id: 1 },

    { description: 'task_1', notes: 'notes_1', completed: false, project_id: 2 },
    { description: 'task_2', notes: 'notes_2', completed: false, project_id: 2 },

    { description: 'task_1', notes: 'notes_1', completed: true, project_id: 3 },
    { description: 'task_2', notes: 'notes_2', completed: false, project_id: 3 },
    { description: 'task_3', notes: 'notes_3', completed: false, project_id: 3 },
    { description: 'task_4', notes: 'notes_4', completed: false, project_id: 3 },

    { description: 'task_1', notes: 'notes_1', completed: true, project_id: 4 },
    { description: 'task_2', notes: 'notes_2', completed: true, project_id: 4 },
    { description: 'task_3', notes: 'notes_3', completed: true, project_id: 4 },

    { description: 'task_1', notes: 'notes_1', completed: true, project_id: 5 },
    { description: 'task_2', notes: '', completed: true, project_id: 5 },
    { description: 'task_3', notes: 'notes_3', completed: true, project_id: 5 },
    { description: 'task_4', notes: 'notes_4', completed: false, project_id: 5 },
    { description: 'task_5', notes: '', completed: false, project_id: 5 },
    { description: 'task_6', notes: 'notes_6', completed: false, project_id: 5 }
  ]);
};
