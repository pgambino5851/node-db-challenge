
exports.seed = function (knex) {
  return knex('projects').insert([
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" }
  ]);

};
