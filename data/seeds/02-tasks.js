
exports.seed = function (knex) {
  return knex('tasks').insert([
    { id: 1, description: 'Description 1', project_id: 1 },
    { id: 2, description: 'Description 2', project_id: 2 },
    { id: 3, description: 'Description 3', project_id: 3 }
  ]);

};
