import { Router } from 'express';
import data from './data';
import middlewares from './middlewares';

const routes = new Router();

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

export default routes;
