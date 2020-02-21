
exports.seed = function (knex) {
  return knex('resources').insert([
    { id: 1, name: "Resource 1", project_id: 1 },
    { id: 2, name: "Resource 2", project_id: 2 },
    { id: 3, name: "Resource 3", project_id: 3 }
  ]);
};
