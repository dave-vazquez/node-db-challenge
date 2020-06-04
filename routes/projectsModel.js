const db = require('../data/db-config');

module.exports = {
  getProjectById
};

async function getProjectById(id) {
  const project = await db('projects')
    .where({ id })
    .first();

  project.tasks = await getTasksByProjectId(id);
  project.resources = await getResourcesByProjectId(id);

  project.completed = !!project.completed;

  return project;
}

async function getTasksByProjectId(id) {
  const tasks = await db('tasks')
    .where('project_id', id)
    .select('id', 'description', 'notes', 'completed');

  tasks.forEach(async task => {
    task.completed = !!task.completed; // boolean type-coercion
    task.contexts = await getContextsByTaskId(task.id);
  });

  return tasks;
}

function getContextsByTaskId(id) {
  return db('contexts as c')
    .join('tasks_contexts as tc', function() {
      this.on('tc.task_id', db.raw('?', [id])).on('tc.context_id', 'c.id');
    })
    .select('c.name');
}

function getResourcesByProjectId(id) {
  return db('resources as r')
    .join('projects_resources as pr', function() {
      this.on('pr.project_id', db.raw('?', [id])).on('pr.resource_id', 'r.id');
    })
    .select('r.id', 'r.name', 'r.description');
}
