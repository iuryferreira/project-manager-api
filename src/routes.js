const routes = require('express').Router();
const data = require('./data');
const middlewares = require('./middlewares');

routes.get('/projects', (req, res) => res.status(200).send(data));

routes.post('/projects', (req, res) => {
  const project = req.body;
  data.push(project);
  return res.status(201).send(data);
});

routes.put('/projects/:id', middlewares.getProject, (req, res) => {
  const { project } = req;
  project.title = req.body.title;
  return res.status(204).send();
});

routes.delete('/projects/:id', middlewares.getProject, (req, res) => {
  data.splice(data.indexOf(req.project), 1);
  return res.status(200).send();
});

routes.post('/projects/:id/tasks', middlewares.getProject, (req, res) => {
  const { project } = req;
  project.tasks.push(req.body.title);
  return res.status(201).send(project);
});

module.exports = routes;
