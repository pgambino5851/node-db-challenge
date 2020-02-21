const express = require('express');

const projectRouter = require('./projects/projectRouter.js');
const taskRouter = require('./tasks/taskRouter.js');
const resourceRouter = require('./resources/resourceRouter.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;